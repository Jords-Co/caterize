import { fixGooAboveFoldContentFlash } from '$caterize/fixGooAboveFoldContentFlash';
import { populateDataAttributeWithElementText } from '$caterize/populateDataAttributeWithElementText';
import { skipToMainContent } from "$digerati/skipToMainContent";
import { currentYear } from "$digerati/currentYear";

window.Webflow || [];
window.Webflow.push(() => {
  fixGooAboveFoldContentFlash();
  skipToMainContent();
  currentYear();
  populateDataAttributeWithElementText();
});