// createUserProfiles function; Task 3

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            originalName: name[index],
            modifiedName: modifiedNames,
            id: index + 1

        };
    });
}

// createUserProfiles result:
let originalNames = ['Leryea', 'Bryan', 'Adotey', 'Nabla', 'Arafat', 'Aileen'];
let modifiedNames = formatArrayStrings(['dan', 'FORSON', 'solomon', 'NASIR', 'nusa', 'MENSAH']);
console.log(createUserProfiles(originalNames, modifiedNames));
