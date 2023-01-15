import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const activities = () => {
  return (
    <div>
      <Head>
        <title>Activities</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" async></script>
      </Head>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>ACTIVITIES</h1>
      <div style={{ padding: '20px 10%',textAlign:'center' }}>
        <h3>	Harvest Plus Task-Oriented Training (TOT) Program:- </h3>
        Harvest Plus hosted two-day Task-Oriented Training (TOT) program from 1st April 2019 to 2nd April 2019 at Patna which was attended by Dr Abhay Shanker Tiwari, Secretary (BLVESS).
        This training program will help the development of the participants for their understanding of the Harvest Plus Program and its objectives, as well as, malnutrition, and its impact.
        Discuss innovative methods to tackle malnutrition, the development of zinc-rich wheat, and its importance, alongwith marketing and campaign strategy. This training program will equip the participants to conduct broader focused group meetings, strengthen their sales and marketing skills and improve their leadership skills to lead communities.

        <h3>	Harvest Plus Stakeholder Meeting: -</h3> Harvest Plus organized a meeting on 25th June 2019 in Patna, Bihar for developing a roadmap for various delivery activities of the biofortified zinc wheat in Bihar for the coming Rabi Season 2019-20. Stakeholders from public, private, and community organizations were invited. Dr Abhay Shanker Tiwari, Secretary (BLVESS) attended the meeting.
        The topics discussed in the meeting were to help and develop a roadmap so that access and demand for nutritious zinc wheat to farming communities can be strengthened. It would also provide an opportunity to share the learning from last year and to develop effective seed production, marketing, distribution, and food processing models for implementation in Bihar.

        <h3>Stakeholder Meeting for Establishing Sustainable Systems for Development and Deployment of Biofortified Crops (Zinc Wheat): - </h3>The main agenda of the meeting was to provide an opportunity to share the learning from last year and to develop effective seed production, marketing, distribution and food processing models for implementation in Uttar Pradesh.
        All the stakeholders from public, private, and community organizations and processing were invited. Dr Abhay Shanker Tiwari, Secretary (BLVESS) attended the stakeholder meeting on 30th August 2019 in Lucknow. He expressed his views on how to develop a roadmap so that access and demand for nutritious zinc wheat to farming communities can be strengthened.

        <h3>	Policy Sharing Workshop by DMI and Harvest Plus: -</h3> Development Management Institute (DMI), Patna, Harvest Plus, and International Food Policy Research Institute (IFPRI), South Asia Office, New Delhi, organized a half-day policy sharing workshop on 23rd September 2019 in Patna Bihar. They conducted a field-based study to develop a policy paper on increasing the production and availability of Biofortified Rice and Wheat in the state of Bihar and Odisha.
        The workshop was organized to share the findings of the study and suggested policies and to get the feedback of the stakeholders. Bharatiya Lok Vikas Evam Shodh Sansthan (BLVESS) Secretary, Dr Abhay Shanker participated in the workshop and gave his valuable feedback, on how to develop a feasible roadmap to increase the acceptance of biofortified crops by the farmers especially, focusing on the farmers of Bihar and Odisha.

        <h3>	Health Oriented Program and Education (HOPE) Initiative, Lucknow, Hepatitis B Awareness Campaign 2019: -</h3> Bharatiya Lok Vikas Evam Shodh Sansthan (BLVESS) participated in the Hepatitis B awareness campaign held in Mirzapur and Sonebhadra districts of Uttar Pradesh. Dr Abhay Shanker, Secretary (BLVESS) took an active part in the campaign and addressed the issues of health by interacting with Adarsh Intercollege teachers and making them aware of the causes and symptoms and effective measures to be taken to fight Hepatitis B infection as shown in Image 1,2, and 3.
        <h3>	  Biofortified High Zinc Wheat Seed Distribution Program</h3>

        Bharatiya Lok Vikas Evam Shodh Sansthan (BLVESS) collaborated with Harvest Plus India for the Biofortified High Zinc Wheat seed distribution Program at the grass-root level with participatory engagements of farm women and farmers. Mini kit trial packs were distributed free of cost to farmers of district Kaimur, Bhabhua in Bihar and district Ghazipur, Bhawarkol in Uttar Pradesh. The High Zinc varieties distributed were: -
        I.	BHU-25 and BHU-31 varieties in Bihar, and
        II.	BHU-31 in Uttar Pradesh.
      </div>
      <Footer />
    </div>
  )
}

export default activities
