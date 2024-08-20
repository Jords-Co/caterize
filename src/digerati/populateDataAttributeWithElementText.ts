/**
 * Populate Data Attribute with Element Text.
 * 
 * @author <cabal@digerati.design>
 */
export const populateDataAttributeWithElementText = () => {
    const elements = document.querySelectorAll('[dd-label]');
    if (!elements) {
        return;
    }
    elements.forEach((element) => {
        let targetElement = element.classList.contains('is-heading-highlight') ? element.previousSibling : element,
            labelText = targetElement.innerText;
        element.setAttribute('dd-label', labelText);
    });
};
