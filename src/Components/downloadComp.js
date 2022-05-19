import React,{Suspense} from 'react'
import DownloadFile from './downloadFile'
// const PDFDownloadLink = React.lazy(() => import('@react-pdf/renderer'));
import { PDFDownloadLink } from '@react-pdf/renderer';
// Create styles

const downloadComp = () => {
  return (
    <div>Download Component
        <div>
        <Suspense fallback={<div>Loading... </div>}>
          <PDFDownloadLink document={<DownloadFile />} fileName="download.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
        </Suspense>
        </div>
    </div>
  )
}

export default downloadComp