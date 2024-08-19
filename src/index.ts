import { skipToMainContent } from "$digerati/skipToMainContent";
import { currentYear } from "$digerati/currentYear";
import { populateDataAttributeHoverText } from '$digerati/populateDataAttributeHoverText';

window.Webflow || [];
window.Webflow.push(() => {
  skipToMainContent();
  currentYear();
  populateDataAttributeHoverText();
});