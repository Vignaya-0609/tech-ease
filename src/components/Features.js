import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaAlignLeft } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { TbTypography } from "react-icons/tb";
import { FaAffiliatetheme } from "react-icons/fa6";
import { MdContentPaste } from "react-icons/md";
import { MdOutlineBorderStyle } from "react-icons/md";
import { MdOutlineLineStyle } from "react-icons/md";
import { FaIcons } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { GrDocumentUpdate } from "react-icons/gr";
import { TbSeo } from "react-icons/tb";
const contents=[{
        icon:<FaAlignLeft/>,
        title:"Visual Composer",
        content:"Create stunning pages effortlessly with our drag-and-drop Visual Composer. Build visually appealing layouts without coding skills."
    },
    {
        icon:<MdComputer/>,
        title:"Responsive",
        content:"Our design adapts seamlessly across all devices, ensuring your website looks perfect on mobile, tablet, and desktop screens."
    },
    {
        icon:<HiMiniComputerDesktop/>,
        title:"Retina Ready",
        content:"Experience crisp, high-resolution visuals with Retina-ready design, making your website look sharp on all high-definition displays."
    },
    {
        icon:<TbTypography/>,
        title:"Typography",
        content:"Customize your text with a variety of fonts and styles, enhancing readability and aesthetics to suit your brand identity."
    },
    {
        icon:<FaAffiliatetheme/>,
        title:"Theme Options Pannel",
        content:"Easily configure your website's look and feel with our intuitive Theme Options Panel, offering extensive customization possibilities."
    },
    {
        icon:<MdContentPaste/>,
        title:"Dummy Content",
        content:"Kickstart your project with pre-built dummy content, providing a solid foundation for your design without starting from scratch."
    },
    {
        icon:<MdOutlineBorderStyle/>,
        title:"Many Style Available",
        content:"Choose from a wide range of styles and layouts, making it easy to create a unique, professional-looking, and stunning website."
    },
    {
        icon:<MdOutlineLineStyle/>,
        title:"Header Style",
        content:"Select from multiple header styles to enhance your website's navigation and first impression, perfectly tailored to your specific needs."
    },
    {
        icon:<FaIcons/>,
        title:"10000+ icons",
        content:"Access an extensive library of over 10,000 icons, allowing you to visually communicate ideas and enhance your overall design."
    },
    {
        icon:<BiSupport/>,
        title:"Support",
        content:"Our dedicated support team is available 24/7, providing assistance and ensuring your website runs smoothly at all times."
    },
    {
        icon:<GrDocumentUpdate/>,
        title:"Update",
        content:"Stay ahead with regular updates, bringing you the latest features, improvements, and security enhancements for your website."
    },
    {
        icon:<TbSeo/>,
        title:"SEO Ready",
        content:"Optimize your website for search engines with built-in SEO tools, driving traffic and improving your site’s visibility online."
    }
]
function Features() {
  return (
    <Container className='mt-5 mb-3' id="features">
            <div className='heading mb-5 pt-5'>
                <h2>Our Features</h2>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">
            {contents.map((data, idx) => (
            <Col key={idx}>
                <Card className='card mb-3'>
                    <Row className='p-2'>
                        <Col md={2}> <h2 style={{color:"orange"}}>{data.icon}</h2></Col>
                        <Col md={10}>
                            <h5>{data.title}</h5>
                            <p style={{textAlign:"justify"}}>{data.content}</p>
                        </Col>
                    </Row> 
                </Card>
            </Col>
            ))}
    </Row>
        </Container>
  )
}

export default Features