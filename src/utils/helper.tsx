export const toPersian = (num: number) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return num
    .toString()
    .replace(/\d/g, (match: string) => persianDigits[parseInt(match)]);
};
