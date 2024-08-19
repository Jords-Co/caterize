/**
 * Populate Data Attribute Hover Text.
 * 
 * @author <cabal@digerati.design>
 */
export const populateDataAttributeHoverText = () => {
    const elements = document.querySelectorAll('[dd-label]');
    if (!elements) {
        return;
    }
    elements.forEach((element) => {
        let labelText = element.innerText;
        element.setAttribute('dd-label', labelText);
    });
};
