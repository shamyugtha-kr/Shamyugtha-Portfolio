import CCTV_Img from "../../../../public/png/projimage/cctv.jpg"
import Ecom_Img from "../../../../public/png/projimage/ecom.jpeg"
import DRDO_Img from "../../../../public/png/projimage/drdo.png"
import Fraud_Img from "../../../../public/png/projimage/fraudDetect.jpeg"


export const ProjectData = [
    {
        type_of: 'article',
        id: 1,
        title: 'Ecommerce Application',
        description: "Based on the MERN stack, the e-commerce application provides a user-friendly interface for product browsing, ordering, and management. This guarantees smooth user experiences and effective handling of orders, payments, and catalogs.",
        url: 'https://github.com/shamyugtha-kr/pixies-expo',
        cover_image: Ecom_Img,
        techStack: ["React Native", "Node.js", "Express.js", "MongoDB"],
      
      },
      {
        type_of: 'article',
        id: 2,
        title: 'Fraud Detection using LSTM and AutoEncoders in Banking Sector',
        description: "Utilizing LSTM and AutoEncoders neural network technology for AI training, the Identity Theft Detection Model improves identity validation by combining behavioral analysis, document authentication, and biometric verification methods.",
        url: '',
        cover_image: Fraud_Img,
        techStack: ["Python", "Neural Networks", "LSTM", "AutoEncoders"],
      
      },
      {
        type_of: 'article',
        id: 3,
        title: 'Inter-connected Wearable Safety Band',
        description: "Ultra-Wideband (UWB) technology is used in the Interconnected Wearable Safety Band project to improve the safety of Indian Navy weather deck workers. It develops a wearable gadget to send out notifications and precisely locate workers in emergency situations, such as man-over-board scenarios, as part of the DRDO IDEX competition.",
        url: '',
        cover_image: DRDO_Img,
        techStack: ["UWB network", "Thread Mesh Network"],
      
      },
      {
        type_of: 'article',
        id: 4,
        title: 'CCTV Metadata Generator AI',
        description: "JavaScript is used for summary conversion in the Automatic Object Detection and Summarization project, whereas the YOLOv8 model is used for accurate object detection. By producing succinct textual summaries with efficiency, it simplifies data analysis procedures.",
        url: '',
        cover_image: CCTV_Img,
        techStack: ["Python", "YOLOv8"],
      
      },
      
]