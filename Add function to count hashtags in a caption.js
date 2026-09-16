function countHashtags(caption) {
  if (typeof caption !== "string") {
    return "Invalid";
  }

  const words = caption.split(" ");
  
  let hashtagCount = 0;
  let longestTag = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.startsWith("#")) {
      hashtagCount++;
      const tagWithoutHash = word.slice(1);
      if (tagWithoutHash.length > longestTag.length) {
        longestTag = tagWithoutHash;
      }
    }
  }
  return {
    hashtagCount: hashtagCount,
    longestTag: longestTag
  };
}
