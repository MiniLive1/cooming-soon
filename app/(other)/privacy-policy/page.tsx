import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CricDash Privacy Policy | CricDash- Terms and conditions | CricDash.com",
  description:
    "In the event that CricDash collects any Personal Information via our website or app, the User hereby agrees to CricDash collecting, storing, processing, transferring, and sharing their Personal Information in line with its privacy policy, which is accessible at https://www.cricdash.com/privacy-policy.",
};

const PrivacyPage = () => {
  return (
    <div className="w-full overflow-y-auto scrollbar">
      <div className="mx-auto max-w-6xl px-2 pt-0 md:pb-32 xl:px-1.5">
        <main className="mt-4 md:mt-10">
          {/* Header section */}
          <header className="flex flex-col gap-6 sm:gap-12">
            <div className="mx-auto max-w-5xl text-center sm:px-8">
              <h1 className="mt-4 text-4xl font-semibold text-heading sm:mt-6 sm:text-5xl text-[#ff5757]">
                Privacy Policy
              </h1>

              <div className="text-base font-medium text-text py-4">
                Last updated: January 10, 2024
              </div>
              {/* <p className="pb-6">
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You. We use Your Personal data to provide and
                improve the Service. By using the Service, You agree to the
                collection and use of information in accordance with this
                Privacy Policy. This Privacy Policy has been created with the
                help of the Privacy Policy Generator.
              </p> */}
            </div>
          </header>

          {/* Article content */}

          <h1 className="py-4 text-3xl font-bold">
            Interpretation and Definitions
          </h1>
          <h1 className="pb-2 text-2xl font-bold">Interpretation</h1>
          <p>
            The words of which the initial letter is capitalised have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>

          <h1 className="pb-2 pt-4 text-2xl font-bold">Definitions</h1>
          <p>For the purposes of this Privacy Policy:</p>

          <ul className="list-disc pl-6 pb-6">
            <li>
              <span className="font-semibold">Account</span> means a unique
              account created for You to access our Service or parts of our
              Service.
            </li>
            <li>
              <span className="font-semibold">Affiliate </span> means an entity
              that controls, is controlled by or is under common control with a
              party, where &quot;control&quot; means ownership of 50% or more of
              the shares, equity interest or other securities entitled to vote
              for election of directors or other managing authority.
            </li>
            <li>
              <span className="font-semibold">Application </span> refers to
              CricDash, the software program provided by the Company.
            </li>
            <li>
              <span className="font-semibold">Company </span> (Referred to as
              either &quot;the Company&quot;, &ldquo;We&rdquo;, &Us;&#34; or
              &rdquo;Our&rdquo; in this Agreement) refers to CricDash.
            </li>
            <li>
              <span className="font-semibold">Cookies </span> are small files
              that are placed on Your computer, mobile device or any other
              device by a website, containing the details of Your browsing
              history on that website among its many uses.
            </li>
            <li>
              <span className="font-semibold">Country </span> refers to:
              Karnataka, India .
            </li>
            <li>
              <span className="font-semibold">Device </span> means any device
              that can access the Service such as a computer, a cellphone or a
              digital tablet.
            </li>
            <li>
              <span className="font-semibold">Personal Data </span> is any
              information that relates to an identified or identifiable
              individual. digital tablet.
            </li>
            <li>
              <span className="font-semibold">Service </span> refers to the
              Application or the Website or both.
            </li>
            <li>
              <span className="font-semibold">Service Provider </span> means any
              natural or legal person who processes the data on behalf of the
              Company. It refers to third-party companies or individuals
              employed by the Company to facilitate the Service, to provide the
              Service on behalf of the Company, to perform services related to
              the Service or to assist the Company in analyzing how the Service
              is used.
            </li>
            <li>
              <span className="font-semibold">Usage Data </span> refers to data
              collected automatically, either generated by the use of the
              Service or from the Service infrastructure itself (for example,
              the duration of a page visit).
            </li>
            <li>
              <span className="font-semibold">Website </span> refers to
              CricDash, accessible from{" "}
              <a
                href="https://cricdash.com"
                target="_blank"
                className="text-blue-500"
              >
                https://cricdash.com
              </a>
              .
            </li>
            <li>
              <span className="font-semibold">You </span> mean the individual
              accessing or using the Service, or the company, or other legal
              entity on behalf of which such individual is accessing or using
              the Service, as applicable.
            </li>
          </ul>
          <h1 className="py-4 text-3xl font-bold">
            Collecting and Using Your Personal Data
          </h1>
          <h1 className="pb-3 text-2xl font-bold">Types of Data Collected</h1>
          <h1 className="pb-2 text-xl font-bold">Personal Data</h1>
          <p>
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
          </p>
          <ul className="list-disc pl-6 pb-6">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Usage Data</li>
          </ul>
          <h1 className="pb-2 text-xl font-bold">Usage Data</h1>
          <p>Usage Data is collected automatically when using the Service.</p>
          <p>
            Usage Data may include information such as Your Device&apos;s
            Internet Protocol address (e.g. IP address), browser type, browser
            version, the pages of our Service that You visit, the time and date
            of Your visit, the time spent on those pages, unique device
            identifiers and other diagnostic data.
          </p>
          <p>
            When You access the Service by or through a mobile device, We may
            collect certain information automatically, including, but not
            limited to, the type of mobile device You use, Your mobile device
            unique ID, the IP address of Your mobile device, Your mobile
            operating system, the type of mobile Internet browser You use,
            unique device identifiers and other diagnostic data.
          </p>
          <p>
            We may also collect information that Your browser sends whenever You
            visit our Service or when You access the Service by or through a
            mobile device.
          </p>

          <h1 className="pb-2 text-2xl font-bold pt-4">
            Tracking Technologies and Cookies
          </h1>

          <p>
            We use Cookies and similar tracking technologies to track the
            activity on Our Service and store certain information. Tracking
            technologies used are beacons, tags, and scripts to collect and
            track information and to improve and analyze Our Service. The
            technologies We use may include:
          </p>
          <ul className="list-disc pl-6 pb-6">
            <li>
              <span className="font-semibold">
                Cookies or Browser Cookies -
              </span>{" "}
              A cookie is a small file placed on Your Device. You can instruct
              Your browser to refuse all Cookies or to indicate when a Cookie is
              being sent. However, if You do not accept Cookies, You may not be
              able to use some parts of our Service. Unless you have adjusted
              Your browser setting so that it will refuse Cookies, our Service
              may use Cookies.
            </li>
            <li>
              <span className="font-semibold">Web Beacons - </span> Certain
              sections of our Service and our emails may contain small
              electronic files known as web beacons (also referred to as clear
              gifs, pixel tags, and single-pixel gifs) that permit the Company,
              for example, to count users who have visited those pages or opened
              an email and for other related website statistics (for example,
              recording the popularity of a certain section and verifying system
              and server integrity).
            </li>
          </ul>
          <p>
            Cookies can be &quot;Persistent&quot; or &quot;Session&quot;
            Cookies. Persistent Cookies remain on Your personal computer or
            mobile device when You go offline, while Session Cookies are deleted
            as soon as You close Your web browser. You can learn more about
            cookies on TermsFeed website article.
          </p>
          <p className="pt-2 font-medium">
            We use both Session and Persistent Cookies for the purposes set out
            below:
          </p>
          <ul className="list-disc pl-6 py-3">
            <li>
              <span className="font-semibold">
                Necessary / Essential Cookies - Type: Session Cookies,
                Administered by: Us, Purpose:
              </span>{" "}
              These Cookies are essential to provide You with services available
              through the Website and to enable You to use some of its features.
              They help to authenticate users and prevent fraudulent use of user
              accounts. Without these Cookies, the services that You have asked
              for cannot be provided, and We only use these Cookies to provide
              You with those services.
            </li>
            <li>
              <span className="font-semibold">
                Cookies Policy / Notice Acceptance Cookies - Type: Persistent
                Cookies, Administered by: Us, Purpose:
              </span>{" "}
              These Cookies identify if users have accepted the use of cookies
              on the Website.
            </li>
            <li>
              <span className="font-semibold">
                Functionality Cookies - Type: Persistent Cookies, Administered
                by: Us, Purpose:
              </span>{" "}
              These Cookies allow us to remember choices You make when You use
              the Website, such as remembering your login details or language
              preference. The purpose of these Cookies is to provide You with a
              more personal experience and to avoid You having to re-enter your
              preferences every time You use the Website.
            </li>
          </ul>
          <p>
            For more information about the cookies we use and your choices
            regarding cookies, please visit our Cookies Policy or the Cookies
            section of our Privacy Policy.
          </p>

          <h1 className="pb-2 pt-4 text-2xl font-bold">
            Use of Your Personal Data
          </h1>
          <p>The Company may use Personal Data for the following purposes:</p>

          <ul className="list-disc pl-6 pb-6">
            <li>
              <span className="font-semibold">
                To provide and maintain our Service
              </span>{" "}
              including to monitor the usage of our Service.
            </li>
            <li>
              <span className="font-semibold">To manage Your Account:</span> to
              manage Your registration as a user of the Service. The Personal
              Data You provide can give You access to different functionalities
              of the Service that are available to You as a registered user.
            </li>
            <li>
              <span className="font-semibold">
                For the performance of a contract:
              </span>{" "}
              the development, compliance and undertaking of the purchase
              contract for the products, items or services You have purchased or
              of any other contract with Us through the Service.
            </li>
            <li>
              <span className="font-semibold">To contact You:</span> To contact
              You by email, telephone calls, SMS, or other equivalent forms of
              electronic communication, such as a mobile application&apos;s push
              notifications regarding updates or informative communications
              related to the functionalities, products or contracted services,
              including the security updates, when necessary or reasonable for
              their implementation.
            </li>
            <li>
              <span className="font-semibold">To provide You</span> with news,
              special offers and general information about other goods, services
              and events which we offer that are similar to those that you have
              already purchased or enquired about unless You have opted not to
              receive such information.
            </li>
            <li>
              <span className="font-semibold">To manage Your requests:</span> To
              attend and manage Your requests to Us.
            </li>
            <li>
              <span className="font-semibold">For business transfers:</span> We
              may use Your information to evaluate or conduct a merger,
              divestiture, restructuring, reorganization, dissolution, or other
              sale or transfer of some or all of Our assets, whether as a going
              concern or as part of bankruptcy, liquidation, or similar
              proceeding, in which Personal Data held by Us about our Service
              users is among the assets transferred.
            </li>
            <li>
              <span className="font-semibold">For other purposes: </span> We may
              use Your information for other purposes, such as data analysis,
              identifying usage trends, determining the effectiveness of our
              promotional campaigns and to evaluate and improve our Service,
              products, services, marketing and your experience.
            </li>
          </ul>
          <p>
            We may share Your personal information in the following situations:
          </p>

          <ul className="list-disc pl-6 pb-6">
            <li>
              <span className="font-semibold">With Service Providers:</span> We
              may share Your personal information with Service Providers to
              monitor and analyse the use of our Service, to contact You.
            </li>
            <li>
              <span className="font-semibold">For business transfers:</span> We
              may share or transfer Your personal information in connection
              with, or during negotiations of, any merger, sale of Company
              assets, financing, or acquisition of all or a portion of Our
              business to another company.
            </li>
            <li>
              <span className="font-semibold">With Affiliates:</span> We may
              share Your information with Our affiliates, in which case we will
              require those affiliates to honor this Privacy Policy. Affiliates
              include Our parent company and any other subsidiaries, joint
              venture partners or other companies that We control or that are
              under common control with Us.
            </li>
            <li>
              <span className="font-semibold">With business partners: </span> We
              may share Your information with Our business partners to offer You
              certain products, services or promotions.
            </li>
            <li>
              <span className="font-semibold">With other users: </span> When You
              share personal information or otherwise interact in the public
              areas with other users, such information may be viewed by all
              users and may be publicly distributed outside.
            </li>
            <li>
              <span className="font-semibold">With Your consent: </span> We may
              disclose Your personal information for any other purpose with Your
              consent.
            </li>
          </ul>
          <h1 className="pb-2 text-2xl font-bold pt-4">
            Retention of Your Personal Data
          </h1>

          <p>
            The Company will retain Your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use Your Personal Data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies.
          </p>
          <p className="pt-1">
            The Company will also retain Usage Data for internal analysis
            purposes. Usage Data is generally retained for a shorter period of
            time, except when this data is used to strengthen the security or to
            improve the functionality of Our Service, or We are legally
            obligated to retain this data for longer time periods.
          </p>
          <h1 className="pb-2 text-2xl font-bold pt-4">
            Transfer of Your Personal Data
          </h1>

          <p>
            Your information, including Personal Data, is processed at the
            Company&apos;s operating offices and in any other places where the
            parties involved in the processing are located. It means that this
            information may be transferred to — and maintained on — computers
            located outside of Your state, province, country or other
            governmental jurisdiction where the data protection laws may differ
            than those from Your jurisdiction.
          </p>
          <p className="pt-1">
            Your consent to this Privacy Policy followed by Your submission of
            such information represents Your agreement to that transfer.
          </p>
          <p className="pt-1">
            The Company will take all steps reasonably necessary to ensure that
            Your data is treated securely and in accordance with this Privacy
            Policy and no transfer of Your Personal Data will take place to an
            organization or a country unless there are adequate controls in
            place including the security of Your data and other personal
            information.
          </p>
          <h1 className="pb-2 text-2xl font-bold pt-4">
            Delete Your Personal Data
          </h1>

          <p>
            You have the right to delete or request that We assist in deleting
            the Personal Data that We have collected about You.
          </p>
          <p className="pt-1">
            Our Service may give You the ability to delete certain information
            about You from within the Service.
          </p>
          <p className="pt-1">
            You may update, amend, or delete Your information at any time by
            signing in to Your Account, if you have one, and visiting the
            account settings section that allows you to manage Your personal
            information. You may also contact Us to request access to, correct,
            or delete any personal information that You have provided to Us.
          </p>
          <p className="pt-1">
            Please note, however, that We may need to retain certain information
            when we have a legal obligation or lawful basis to do so.
          </p>
          <h1 className="pb-3 pt-6 text-2xl font-bold">
            Disclosure of Your Personal Data
          </h1>
          <h1 className="pb-2 text-xl font-bold">Business Transactions</h1>
          <p>
            If the Company is involved in a merger, acquisition or asset sale,
            Your Personal Data may be transferred. We will provide notice before
            Your Personal Data is transferred and becomes subject to a different
            Privacy Policy.
          </p>
          <h1 className="pb-2 pt-6 text-xl font-bold">Law enforcement</h1>
          <p>
            Under certain circumstances, the Company may be required to disclose
            Your Personal Data if required to do so by law or in response to
            valid requests by public authorities (e.g. a court or a government
            agency).
          </p>
          <h1 className="pb-2 pt-6 text-xl font-bold">
            Other legal requirements
          </h1>
          <p>
            The Company may disclose Your Personal Data in the good faith belief
            that such action is necessary to:
          </p>
          <ul className="list-disc pl-6 pb-6">
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of the Company</li>
            <li>
              Prevent or investigate possible wrongdoing in connection with the
              Service
            </li>
            <li>
              Protect the personal safety of Users of the Service or the public
            </li>
            <li>Protect against legal liability</li>
          </ul>
          <h1 className="pb-2 text-xl font-bold">
            Security of Your Personal Data
          </h1>
          <p>
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We
            cannot guarantee its absolute security.
          </p>
          <h1 className="pb2 pt-6 text-xl font-bold">
            DoubleClick DART Cookie for Google
          </h1>
          <p>
            On our website, Google is one of the third-party vendors.
            Additionally, it makes use of cookies—known as DART cookies—to show
            our website visitors advertisements based on their browsing history
            on www.website.com and other websites. Visitors can opt out of DART
            cookie use, though, by going to the Google ad and content network
            privacy policy at https://policies.google.com/technologies/ads.
          </p>
          <h1 className="pb2 pt-6 text-xl font-bold">
            Our Advertising Partners
          </h1>
          <p>
            Cookies and web beacons may be used by some of our site&apos;s
            advertisers. The list of our advertising partners is below. Every
            one of our advertising partners has a privacy policy that outlines
            how they handle user data. We&apos;ve included a hyperlink to their
            privacy policies below for ease of access.
          </p>

          <p> Google : </p>
          <a
            href="https://policies.google.com/technologies/ads"
            target="/blank"
            className="text-blue-500"
          >
            {" "}
            https://policies.google.com/technologies/ads
          </a>

          <h1 className="pb-2 pt-6 text-xl font-bold">
            Privacy Policies of Advertising Partners
          </h1>
          <p>
            You can look through this list to see each CricDash advertising
            partner&apos;s privacy policy.
          </p>
          <p className="pt-1">
            The links and adverts that show on CricDash are provided straight to
            user&apos;s browsers by third-party ad servers or ad networks using
            technologies like cookies, JavaScript, or Web Beacons. When this
            happens, they automatically get your IP address. These technologies
            are employed to track how well their advertising campaigns are
            working and/or to target the advertisements you see on websites you
            visit.
          </p>
          <p className="pt-1">
            Please be aware that CricDash is not in charge of or has access to
            these third-party advertiser cookies.
          </p>
          <h1 className="pb-2 pt-6 text-3xl font-bold">
            Privacy Policies of Third Parties
          </h1>
          <h1 className="pb-2 pt-6 text-xl font-bold">
            Children&apos;s Privacy
          </h1>

          <p>
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13. If You are a parent or guardian and You are
            aware that Your child has provided Us with Personal Data, please
            contact Us. If We become aware that We have collected Personal Data
            from anyone under the age of 13 without verification of parental
            consent, We take steps to remove that information from Our servers.
          </p>
          <p className="pt-1">
            If We need to rely on consent as a legal basis for processing Your
            information and Your country requires consent from a parent, We may
            require Your parent&apos;s consent before We collect and use that
            information.
          </p>

          <h1 className="pb-2 pt-6 text-xl font-bold">
            Changes to this Privacy Policy
          </h1>

          <p>
            We may update Our Privacy Policy from time to time. We will notify
            You of any changes by posting the new Privacy Policy on this page.
          </p>
          <p className="pt-1">
            We will let You know via email and/or a prominent notice on Our
            Service, prior to the change becoming effective and update the
            &quot;Last updated&quot; date at the top of this Privacy Policy.
          </p>
          <p className="pt-1">
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
          <h1 className="pb-2 pt-6 text-xl font-bold">Contact Us</h1>

          <p>
            If you have any questions about this Privacy Policy, You can contact
            us:
          </p>
          <ul className="list-disc pl-6 pb-6">
            <li>
              By visiting this page on our website:{" "}
              <Link href="/contact" className="text-blue-500">
                https://cricdash.com/contact
              </Link>
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPage;
