import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

class ReactPdf extends Component {
    state = {
      numPages: null,
      pageNumber: 1,
    }
   
    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    }
   
    render() {
      const { pageNumber, numPages } = this.state;
   
      return (
        <div>
          <Document
            file="somefile.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
        </div>
      );
    }
  }

  export default ReactPdf;