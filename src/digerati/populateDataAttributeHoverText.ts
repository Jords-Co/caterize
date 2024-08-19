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
        let targetElement = element.classList.contains('is-heading-highlight') ? element.previousSibling : element,
            labelText = targetElement.innerText;
        console.log(labelText);
        element.setAttribute('dd-label', labelText);
    });
};
