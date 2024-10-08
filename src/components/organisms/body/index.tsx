// ----------------------------------------------------------------------------------
// Body organism for the center part of the page.
// ----------------------------------------------------------------------------------

import Paragraph from "@/components/molecules/paragraph";
import CardGrid from "@/components/organisms/cardGrid";
import {Certification} from "@/components/atoms/certification";
import {EducationList} from "../../organisms/educationList";
import {Portfolio} from "@/components/organisms/portfolio";
import {Footer} from "@/components/molecules/footer";

export default function Body() {
    return (
        <div className="flex flex-col items-center w-full mx-auto gap-6 text-sm">
            <Paragraph
                label={"My Knowledge"}
                content={""}
            />
            <Certification
                certificationName={"AWS Solution Architect Associate"}
                description={"In June 2024."} />
            <CardGrid cards={[
                {
                    title: "Full Stack Web Development",
                    subtitle: "Java Spring Boot, Express.js, Angular, Vue.js, React, AdonisJS, HTML, CSS",
                    logo:"clarity:devices-solid"
                },
                {
                    title: "Cloud",
                    subtitle: "AWS, Azure, Docker, Terraform, GitLab CI/CD",
                    logo:"material-symbols:cloud-outline"
                },
                {
                    title: "Information Security",
                    subtitle: "OWASP SAMM, ISO 27001, SAST, DAST, Pentest, Cryptography, Blockchain",
                    logo:"hugeicons:security-lock"
                },
                {
                    title: "Data",
                    subtitle: "Power BI, Oracle SQL, PostgreSQL, MongoDB, Data Science",
                    logo:"bi:clipboard-data"
                },
                {
                    title: "Project Management",
                    subtitle: "Azure DevOps, Jira, Agile SCRUM, Kanban",
                    logo:"fluent-mdl2:production-floor-management"
                },
                {
                    title: "UI/UX Design",
                    subtitle: "Figma, Illustrator, Photoshop, Canva",
                    logo:"iconoir:design-nib-solid"
                }
            ]} />
            <Paragraph
                label={"Portfolio"}
                content={"Here you will find a list of projects I have worked on recently."}
            />
            <Portfolio cards={[
                {
                    image: "/img/cloud.png",
                    title: "Cloud Web Application",
                    description: "A web application for an association, that allows users to upload files to the cloud for historical archiving and be able to retrieve them easily.",
                    link: "https://github.com/AdrienMorin/Arca",
                    linkText: "View on GitHub"
                },
                {
                    image: "/img/veltiosia.png",
                    title: "Veltiosia's website",
                    description: "A webflow website development that helps the client to get started and then be able to manage the website on their own.",
                    link: "https://www.veltiosia.fr",
                    linkText: "Visit the website"
                },
                {
                    image: "/img/powerbi.png",
                    title: "PowerBI Dashboard",
                    description: "A data project for a retail company that consisted of remodeling there actual solution to a more modern and efficient one using PowerBI and Azure Services.",
                    link: "",
                    linkText: ""
                },
                {
                    image: "/img/nuancin.png",
                    title: "Nuanc'in's website",
                    description: "A webflow website development that helps the client to get started and then be able to manage the website on their own.",
                    link: "https://www.nuancin.fr/",
                    linkText: "Visit the website"
                },
            ]}
            />
            <Paragraph
                label={"Education"}
                content={""}
            />
            <EducationList
                list={[
                    {
                        leftTitle: "Computer Engineering",
                        leftLabel: "Student",
                        date: "2020-2025",
                        rightTitle: "INSA Lyon",
                        description: "I am currently studying at INSA Lyon, a French engineering school, in the Computer Science department."
                    },
                    {
                        leftTitle: "Computer Engineering",
                        leftLabel: "Student",
                        date: "2024",
                        rightTitle: "Universidad de Antioquia, Medellín",
                        description: "I studied at the Universidad de Antioquia in Medellín, Colombia, as part of an exchange program. I took courses of Information Security, Blockchain, Web Engineering and Project Management."
                    },
                ]}
            />
            <Paragraph
                label={"Experiences"}
                content={""}
            />
            <EducationList
                list={[
                    {
                        leftTitle: "Full Stack Developer",
                        leftLabel: "Internship",
                        date: "2024 (3 months)",
                        rightTitle: "Onepoint, Lyon, France",
                        description: "AWS Solution Architect Associate certification. " +
                            "Projects : Agile SCRUM Full Stack and PowerBI. " +
                            "Java, Angular, PostgreSQL, Azure BlobStorage, Docker, Terraform."
                    },
                    {
                        leftTitle: "Full Stack Developer",
                        leftLabel: "Internship",
                        date: "2023 (3 months)",
                        rightTitle: "Dassault Systèmes R&D Japan Lab (DSKK), Nagoya, Japan",
                        description: "Full stack, Java, Vue.js, GitLab pipelines and integration tests in JavaScript, data encryption"
                    },
                    {
                        leftTitle: "Account Executive & Marketing member",
                        leftLabel: "Student",
                        date: "2022 - 2024",
                        rightTitle: "ETIC INSA Technologies, Lyon, France",
                        description: "Needs analysis, drafting of specifications and project follow-up. Website development, integration between Hubspot CRM and other services."
                    },
                    {
                        leftTitle: "Computer Engineering",
                        leftLabel: "Interim",
                        date: "2022 (2 months)",
                        rightTitle: "SEEB Industrie, Chauffailles, France",
                        description: "Automatic coding of elements and tools in C# for the deployment of a new shop management software."
                    },
                    {
                        leftTitle: "IT Intern",
                        leftLabel: "Internship",
                        date: "2021",
                        rightTitle: "Cruas-Meysse Nuclear Power Plant (EDF), Cruas, France",
                        description: "Telecom audit constituting the basis for a project to implement 4G within the company."
                    },
                ]}
            />
            <Footer />
        </div>
    );
}
