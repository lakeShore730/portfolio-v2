export function downloadPDF() {
  fetch("bishnu-thapa-resume.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);

      // Setting various property values
      const alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "bishnu-thapa-resume.pdf";
      alink.click();
    });
  });
}

// PDF download code clone.
// https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/#:~:text=It%20is%20possible%20by%20using,one%20single%20component%20named%20%E2%80%9CApp.
