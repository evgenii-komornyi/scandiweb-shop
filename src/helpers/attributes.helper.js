export const checkForDuplicate = (attributes, newName, newValue) => {
    const existingSelectedAttribute = attributes.find(
        attribute => attribute.name === newName
    );

    if (existingSelectedAttribute) {
        return attributes.map(attribute =>
            attribute.name === newName
                ? {
                      name: existingSelectedAttribute.name,
                      value: newValue,
                  }
                : attribute
        );
    }

    return [...attributes, { name: newName, value: newValue }];
};
