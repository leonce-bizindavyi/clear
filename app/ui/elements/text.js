"use client"
import React from 'react';

function Text({ text, length }) {
  // Expression régulière pour détecter les liens et les noms de domaine
  const regexLinkAndDomain = /(?:https?:\/\/\S+|\bwww\.\S+\b|\b[^\s]+\.[^\s]+\b)/gi;
  // Expression régulière pour détecter les hashtags
  const regexHashtag = /#(\p{L}+)/gu;

  // Remplacer les liens et noms de domaine par des éléments <a>
  const textWithLinks = text.replace(regexLinkAndDomain, (match) => {
    // Check if it starts with http or has www.
    if (match.startsWith('http') || match.startsWith('www.')) {
      return `<a className="text-blue-600 hover:underline" href="${match.startsWith('www.') ? 'http://' + match : match}" key="${match}" target="_blank" rel="noopener noreferrer">${match}</a>`;
    } else {
      // Otherwise, assume it's a domain name
      return `<a className="text-blue-600 hover:underline" href="http://${match}" key="${match}" target="_blank" rel="noopener noreferrer">${match}</a>`;
    }
  });

  // Remplacer les hashtags par des éléments <a>
  const textWithLinksAndHashtags = textWithLinks.replace(regexHashtag, (match, hashtag) => (
    `<a className="text-blue-600 hover:underline" href="/${hashtag}/hashtags" key="${match}" target="_blank" rel="noopener noreferrer">#${hashtag}</a>`
  ));

  return (
    <span dangerouslySetInnerHTML={{ __html: textWithLinksAndHashtags }} />
  );
}

export default Text;
