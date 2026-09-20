const fs = require('fs');
const file = 'src/components/Header.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace <a> tags
content = content.replace(/<a([^>]*?)href=[\"']https:\/\/(www\.)?blsslovakiavisa\.com([^\"']*)[\"']([^>]*)>(.*?)<\/a>/gi, function(match, p1, p2, p3, p4, p5) {
    let path = p3 || '/';
    return '<Link' + p1 + 'to=\"' + path + '\"' + p4 + '>' + p5 + '</Link>';
});

fs.writeFileSync(file, content);
console.log('Replaced links successfully');
