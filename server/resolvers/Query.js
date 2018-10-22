//This file will hold all the resolvers for Queries
const fetch = require('isomorphic-unfetch');
const queryString = require('query-string');

const { getFormattedDate } = require('../helpers/helpers');

const Query = {
  repos: async (root, args, context, info) => {
    const { time, language } = args;

    const date = new Date();
    date.setDate(date.getDate() - time);

    const createdDateString = getFormattedDate(date);

    const searchParams = queryString.stringify({
      sort: 'stars',
      order: 'desc',
      q: `language:${language} created:>${createdDateString}`,
      per_page: '60'
    });

    const res = await fetch(
      `https://api.github.com/search/repositories?${searchParams}`
    );
    const data = await res.json();
    return data.items;
  }
};

module.exports = { Query };
