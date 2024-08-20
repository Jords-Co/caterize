import { skipToMainContent } from "$digerati/skipToMainContent";
import { currentYear } from "$digerati/currentYear";
import { populateDataAttributeWithElementText } from '$digerati/populateDataAttributeWithElementText';

window.Webflow || [];
window.Webflow.push(() => {
  skipToMainContent();
  currentYear();
  populateDataAttributeWithElementText();
});