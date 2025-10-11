export function parseBibTeX(text) {
    const entries = [];
    const entryRegex = /@(\w+)\s*{\s*([^,]*),\s*((?:[^{}]*|{[^{}]*})*)\s*}/g;
    const fieldRegex = /(\w+)\s*=\s*[{"]([^}"]*)[}"]/g;

    let match;
    while ((match = entryRegex.exec(text)) !== null) {
        const [, type, citationKey, contents] = match;
        const entry = {
            type,
            citationKey,
            fields: {}
        };

        let fieldMatch;
        while ((fieldMatch = fieldRegex.exec(contents)) !== null) {
            const [, field, value] = fieldMatch;
            entry.fields[field.toLowerCase()] = value;
        }

        entries.push(entry);
    }

    return entries;
}