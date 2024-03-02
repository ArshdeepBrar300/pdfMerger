import PDFMerger from "pdf-merger-js";

const merger = new PDFMerger();

export const mergePdfs = async (p1, p2, pdfpages1, pdfpages2) => {
    console.log(pdfpages1,pdfpages2);
  
//     let single1=[],range1=[],single2=[],range2=[]
//     for(let i=0;i<pageRanges1.length;i++){
//         if(pageRanges1[i].length>1){
//             range1.push(pageRanges1[i])
//         }
//         else{
//             single1.push(pageRanges1[i])
//         }
//     }
//     for(let i=0;i<pageRanges2.length;i++){
//         if(pageRanges2[i].length>1){
//             range2.join(pageRanges2[i].split('-'))
//         }
//         else{
//             single2.push(pageRanges2[i])
//         }
//     }
// console.log(single1,pageRanges2)
   console.log(pdfpages1,pdfpages2);
        await merger.add(p1, pdfpages1);
    

  
        await merger.add(p2, pdfpages2);
    

    const timestamp = new Date().getTime();
    await merger.save(`public/${timestamp}merged.pdf`);
    return `${timestamp}merged.pdf`;
};
