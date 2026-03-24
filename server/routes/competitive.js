const express = require('express');

const router = express.Router();

// Fetch live LeetCode stats via public GraphQL API
router.get('/leetcode/:username', async (req, res) => {
  const { username } = req.params;

  const query = `
    query userProfile($username: String!) {
      matchedUser(username: $username) {
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
        languageProblemCount {
          language
          problemsSolved
        }
        tagProblemCounts {
          tagName
          problemsSolved
        }
      }
    }
  `;

  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
        'User-Agent': 'Mozilla/5.0',
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });

    if (!response.ok) {
      return res.status(502).json({ error: 'Failed to fetch data from LeetCode' });
    }

    const json = await response.json();
    const user = json?.data?.matchedUser;

    if (!user) {
      return res.status(404).json({ error: 'LeetCode user not found' });
    }

    const submissions = user.submitStatsGlobal?.acSubmissionNum || [];

    const totalEntry = submissions.find((s) => s.difficulty === 'All');
    const easyEntry = submissions.find((s) => s.difficulty === 'Easy');
    const mediumEntry = submissions.find((s) => s.difficulty === 'Medium');
    const hardEntry = submissions.find((s) => s.difficulty === 'Hard');

    const totalSolved = totalEntry?.count ?? 0;

    const languages = (user.languageProblemCount || [])
      .slice()
      .sort((a, b) => (b.problemsSolved || 0) - (a.problemsSolved || 0))
      .slice(0, 6)
      .map((l) => ({ language: l.language, solved: l.problemsSolved }));

    const topics = (user.tagProblemCounts || [])
      .slice()
      .sort((a, b) => (b.problemsSolved || 0) - (a.problemsSolved || 0))
      .slice(0, 8)
      .map((t) => ({ tag: t.tagName, solved: t.problemsSolved }));

    return res.json({
      username,
      totalSolved,
      difficultyBreakdown: {
        easy: easyEntry?.count ?? 0,
        medium: mediumEntry?.count ?? 0,
        hard: hardEntry?.count ?? 0,
      },
      topLanguages: languages,
      topTopics: topics,
      profileUrl: `https://leetcode.com/u/${username}/`,
    });
  } catch (err) {
    console.error('LeetCode stats error:', err);
    return res.status(500).json({ error: 'Internal server error while fetching LeetCode stats' });
  }
});

module.exports = router;
