// Checks the body text of the post for links
// and properly renders an <a> tag

const urlRegex = /(https?:\/\/[^\s]+)/g;
export function formatBodyText(text: string) {
    if (!text) return;
    return text.split(urlRegex).map((textSection, i) => {
        return urlRegex.test(textSection) ? (
            <a href={textSection} key={i} target="_blank">
                {textSection}
            </a>
        ) : (
            textSection
        );
    });
}
