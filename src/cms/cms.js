import CMS from "netlify-cms";

import DocumentationPreview from "./preview-templates/DocumentationTemplate";

CMS.registerPreviewStyle("/styles.css");
CMS.registerPreviewTemplate("documentation", DocumentationPreview);
