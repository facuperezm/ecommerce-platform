const truncate = (str, max, suf) =>
  str.length < max
    ? str
    : `${str.substr(
        0,
        str.substr(0, max - suf.length).lastIndexOf(" ")
      )}${suf}`;

export default truncate;
