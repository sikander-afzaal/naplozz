import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import FaqTab from "../../Components/FaqTab";
import GradientButton from "../../Components/GradientButton";

const Faq = () => {
  const GENERAL_DATA = [
    {
      question: "What is Naplozz?",
      answer:
        "Naplozz can be described as more than a task management software that lets you identify, organize, monitor, manage and accomplish all the tasks related to your business. ",
    },
    {
      question:
        "What are the benefits of using our Naplozz task management tool? ",
      answer:
        "Naplozz's task management tool offers much more than the competitors. You can use Naplozz for: ",
      list: [
        "Effective task management, i.e., projects tasks, HR-related activities, tracking, and more. ",
        "Virtual Team Collaboration ",
        "Task progress tracking ",
        "Easy to manage data tracking, logging system ",
        "Log Wizard makes easy to set up all the logs ou need ",
        "Smart notification system protect you to miss deadlines ",
        "Easy to manage multiple sites (for example, restaurants at different locations in the food chain) ",
        "Easy-to-use and intuitive user interface",
      ],
    },
    {
      question: "What to look for in task management software? ",
      answer:
        "Choosing a task management tool might seem easy but is challenging as it can affect your business's compliance, growth, and overall development. Here's how to choose task management software:  ",
      list: [
        "Effective tracking: Ensure that the managers can assign, check progress, or manage all the tasks and goals even at different sites. ",
        "The tool must be user-friendly to monitor the team progress on a particular project continuously. ",
        "Make sure that the development team behind the software offers regular updates to improve the service. ",
      ],
    },
    {
      question:
        "What makes Naplozz better than other project management software in the market? ",
      answer:
        "Choosing a task management tool might seem easy but is challenging as it can affect your business's compliance, growth, and overall development. Here's how to choose task management software:  ",
      list: [
        "Task Prioritization: Naplozz is good at prioritizing the tasks among the team members. ",
        "Recurring tasks: You can also automate recurring tasks and create tasks for the future. ",
        "Smart Logging system: Naplozz is good at managing the logging/tracking work in a way that all the rduties and esponsibilities are clear and well allocated. ",
        "Log Wizard: You only need to answer the questions and Naplozz Wizzard will create the necessary log frames for your workspaces. ",
        "All the logs you need: Naplozz Team are continuously adding new log frames to ensure you have all the necessary and mandatory logs you need for your daily business activity. ",
        "Smart notification system: Automated notifications protect you missing deadlines and guide you how to follow the rules of each of the default logs. As a manager you can decide whenever you want to participate in the daily work so you can turn on or off notifications log by log accordingly. ",
      ],
    },
    {
      question: "Which languages are available in Naplozz? ",
      answer: "Naplozz is available in two languages: ",
      list: ["English", "Hungary"],
    },
    {
      question: "Is my data secure? ",
      answer:
        "Yes, the customer-input data is solely to improve the business's services. Please check our Terms and services for more information in relation. https://naplozz.hu/TermsAndConditions ",
    },
  ];
  const PAYMENT_DATA = [
    {
      question: "Can I get a trial?",
      answer:
        "Yes, you can get a 14 days of free trial on signup. You can always cancel your subscription before you are charged with 1st paymet",
    },
    {
      question:
        "How do I change the number of users for my current subscription package?",
      answer: `You can check the plans under the "manage billing" option. Here's how to select a subscription package: `,
      list: [
        "1. Login to Naplozz portal. ",
        "2. Click on the profile image from the upper right corner of the page",
        `3. Select the "Manage Billing" option to see the details of the package you are currently in.`,
        `4. There you can select “Change package” and you will be able to change the number of users. `,
      ],
    },
    {
      question:
        "How do I change the number of sites for my current subscription package? ",
      answer: `You can check the plans under the "manage billing" option. Here's how to select a subscription package: `,
      list: [
        "1. Login to Naplozz portal. ",
        "2. Click on the profile image from the upper right corner of the page",
        `3. Select the "Manage Billing" option to see the details of the package you are currently in`,
        `4. There you can see and change to the other packages that allow you to create more sites. `,
      ],
    },
    {
      question: "What package should I choose? ",
      answer: `The package you need for your business depends on the number of team members, the number of sites your business have and different other functions. Please visit our site’s pricing section to make sure that ou are in a plan that fits you the best: https://naplozz.hu/#pricing  `,
    },
    {
      question: "What payment methods are available at Naplozz? ",
      answer: `Visa, Union Pay, American Express, MasterCard, and Google Pay. `,
    },
    {
      question: "What payment methods are available at Naplozz? ",
      answer: `Visa, Union Pay, American Express, MasterCard, and Google Pay. `,
    },
    {
      question: "How can I cancel the subscription? ",
      answer: `You can cancel the plans under the "manage billing" option. Here's how to cancel a subscription package:`,
      list: [
        "1. Login to Naplozz portal. ",
        "2. Click on the profile image from the upper right corner of the page",
        `3. Select the "Manage Billing" option and click on "cancel the plan`,
      ],
    },
  ];
  const ACCOUNT_DATA = [
    {
      question: "How do I signup for Naplozz? ",
      answer: "You can sign up for Naplozz portal by following these steps: ",
      list: [
        "Go to the link: https://naplozz.netlify.app/register ",
        `Fill in all the details and click on ”create account”. `,
        "Please, open your emails and conp the confirmation code and input to the right place. ",
        "After you confirmed it you will be redirected to the payment page where you can select the best plan for your need. ",
        "After selecting the plan you will need to add your card details to the right places and confirm and submit your payment and start your 14 days free trial. ",
        "Please, input your company data then carefully because that is the data which will be appearing on all of your created logs. ",
        "After company data input you are ready to log in and start you work. ",
      ],
      note: "! Please, don’t give out any credentials to anyone! Naplozz Team members will never ask for your login or credit card data. ",
    },
    {
      question: "How do I access the dashboard? ",
      answer: `Once you log in to Naplozz, you'll be automatically redirected to the dashboard page. You can also access the dashboard from the left-hand side menu bar. You can see the following information on the dashboard: `,
      list: ["Total sites ", "Total users", `Total Groups `, `Total logs `],
    },
    {
      question: "What should be the first step to start off with Naplozz? ",
      list: [
        "1. First of all you can start with creating your first site.  ",
        "2. You can invite managers and users to the site.",
        `3. Now you are ready to start to organize your workflow by giving tasks and assigning logs to your users. `,
      ],
    },
    {
      question: "From Where can I allow the notifications? ",
      answer: `You can manullay turn on the notifications related to Naplozz app in the setting of your browser. After that the users in managing role will have to turn on the notifications after each of the logs by turning on “Notify me” button manually. Employees in “user” role will get all the notifications after the assigned logs automatically. Tasks have their own notifications designed by the logic that follows the task assignment hierarchy.  `,
    },
  ];
  const PROFILE_DATA = [
    {
      question: "From where can I make changes to my profile? ",
      answer:
        "You can access the profile tab on the Naplozz portal in two ways: ",
      list: [
        `1. Click on the profile icon at the right upper corner of the page and click on "Profile." `,
        `2. Select settings from the left-hand menu and then the " profile" option from the drop-down list. `,
      ],
    },
    {
      question: "Can I change my personal details? ",
      answer: `Yes, you can always change your personal details under the profile tab by clicking on the "Update profile" option. Your role and email can only be changed by the owner or the managers of the company. `,
    },
    {
      question: "Can I change my password?  ",
      answer: `Yes, you can always change your password under the profile tab by clicking on the "change password" option. Enter the old password followed by the new one to change the settings. `,
    },
    {
      question: "How to change the company details? ",
      answer: `You can access the company details option by following these steps (only for Admin):  `,
      list: [
        "1. Login to Naplozz portal. ",
        "2. Click on the profile image from the upper right corner of the page",
        `3. Here, you can select the "company details"option to enter the information. `,
      ],
    },
    {
      question: "How can I set up my signature? ",
      answer: `Your signature will be used in different occasions during accom`,
      list: [
        "1. Click on the profile image from the upper right corner of the page",
        `2. Here, you can select the "Signature" option to draw and save your signature. `,
      ],
    },
  ];
  return (
    <div className="wrapper pt-[110px] xl:pt-[220px] relative">
      <div className="absolute top-[100px] -z-10 left-1/2 -translate-x-1/2 bg-marketplace w-full max-w-[1709px] h-[533px] blur-[130.9px] opacity-[0.15]"></div>
      <div className="absolute -bottom-[100px] -z-10 -right-[30%] bg-[#A50498] w-full max-w-[1064px] h-[688px] blur-[250px] opacity-[0.25]"></div>
      <div className="contain flex-col justify-start items-center lg:items-start gap-4">
        <div className="relative">
          <img
            src="/explore/ball.png"
            className="absolute xl:block hidden right-0 bottom-[120%] w-[30px] object-contain"
            alt=""
          />
          <img
            src="/explore/ball.png"
            className="absolute xl:block hidden blur-[2.5px] w-[62px] object-contain -right-[10%] bottom-[60%]"
            alt=""
          />
          <h2 className="gr-text text-[40px] sm:text-[55px] lg:text-[72px] lg:text-left text-center font-bold">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-white text-base sm:text-xl font-medium lg:text-left text-center">
          Everything you need to know about naplozz
        </p>
        <div className="flex justify-start items-start flex-col mt-10">
          <h2 className="gr-text text-[40px] sm:text-left text-center sm:text-[60px] font-bold">
            General
          </h2>
          {GENERAL_DATA.map((elem, idx) => {
            return <FaqTab {...elem} key={idx + "faq"} />;
          })}
        </div>
        <div className="flex justify-start items-start flex-col mt-10">
          <h2 className="gr-text text-[40px] sm:text-left text-center sm:text-[60px] font-bold">
            Payment and subscription
          </h2>
          {PAYMENT_DATA.map((elem, idx) => {
            return <FaqTab {...elem} key={idx + "faq"} />;
          })}
        </div>
        <div className="flex justify-start items-start flex-col mt-10">
          <h2 className="gr-text text-[40px] sm:text-left text-center sm:text-[60px] font-bold">
            Account Set up
          </h2>
          {ACCOUNT_DATA.map((elem, idx) => {
            return <FaqTab {...elem} key={idx + "faq"} />;
          })}
        </div>
        <div className="flex justify-start items-start flex-col mt-10">
          <h2 className="gr-text text-[40px] sm:text-left text-center sm:text-[60px] font-bold">
            Profile and settings{" "}
          </h2>
          {PROFILE_DATA.map((elem, idx) => {
            return <FaqTab {...elem} key={idx + "faq"} />;
          })}
        </div>
        <div className="flex mt-[50px] sm:mt-[90px] justify-start items-center lg:items-start flex-col gap-3">
          <h2 className="gr-text text-[32px] sm:text-[35px] md:text-[48px] font-bold lg:text-left text-center">
            Still Have questions? Get in touch
          </h2>
          <p className="text-[#B3B3B3] font-medium text-base sm:text-xl lg:text-left text-center">
            Can’t find the answer you are looking for? Contact our friendly
            team.
          </p>
          <Link to="/contact">
            <GradientButton
              classes={"w-[145px] h-[55px] hover:w-[170px] mt-2"}
              text={
                <>
                  Contact us
                  <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
                </>
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Faq;
