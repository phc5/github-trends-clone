const getFormattedDate = dateObject => {
  const year = dateObject.getFullYear();
  const month = ('0' + (dateObject.getMonth() + 1)).slice(-2);
  const day = ('0' + dateObject.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

module.exports = {
  getFormattedDate
};
