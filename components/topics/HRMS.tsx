import React from 'react'

const HumanResourceManagementSystem = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900/30 py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Title Section */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-indigo-600 via-indigo-600 to-violet-600 text-white px-6 py-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent)]" />
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight relative z-10 text-center">HUMAN RESOURCE MANAGEMENT SYSTEM (HRMS)</h1>
          </div>

          {/* Main Content - Paragraph 1 */}
          <div className="p-6 sm:p-8 space-y-6">
            {[
              "On 21st February 2020, the Chairman, Railway Board launched the Human Resource Management System (HRMS) Mobile App. Indian Railways Department Accounting Information and Management System (AIMS) and Centre for Railway Information System (CRIS) have jointly developed the HRMS Mobile App.",
              "It provides self-service to 13 lakh employees of Indian Railways, which is the 8th largest employer in the world and 4th largest railway network.",
              "Indian Railways employees can view their monthly pay slip, tax forms, Form 16, payment of bills, career development search, Provident Fund, Loans & Advances, Income Tax details and more.",
            ].map((text, i) => (
              <div
                key={i}
                className="group flex flex-col items-center justify-center gap-4 rounded-xl border-l-4 border-indigo-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-indigo-400/70"
              >
                <span className="flex h-7 w-7 shrink-0 mt-0.5 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold">
                  {i + 1}
                </span>
                <p className="text-slate-200 text-sm leading-relaxed pt-0.5">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Registration Process Section */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-indigo-600/90 to-violet-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">AIMS HRMS Portal - Registration Process:</h2>
          </div>
          <div className="p-6 sm:p-8 space-y-6">
            {[
              "AIMS has initiated the online registration process for AIMS HRMS portal. Indian Railways employees who wish to use AIMS services are advised to follow the process given below.",
              "Visit the official AIMS portal using the URL link as- 'aims.indianrailways.gov.in'.",
              "After the Railway employee HRMS page loads, click on \"Employee Self Service\".",
            ].map((text, i) => (
              <div
                key={i}
                className="group flex flex-col items-center justify-center gap-4 rounded-xl border-l-4 border-indigo-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-indigo-400/70"
              >
                <span className="flex h-7 w-7 shrink-0 mt-0.5 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold">
                  {i + 1}
                </span>
                <p className="text-slate-200 text-sm leading-relaxed pt-0.5">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-indigo-600/90 to-violet-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Process:</h2>
          </div>
          <div className="p-6 sm:p-8 space-y-6">
            {[
              { title: "Unit Admin:", text: "Unit Admin creates Grievance Incharge Officer (GIO), who becomes the Personal Branch Officer." },
              { title: "GIO:", text: "GIO creates Grievance Welfare Members (GWM), who are staff personnel in the Personal Branch Department, and are responsible for managing the Grievance Cell of their unit." },
              { title: "QWM:", text: "QWM will create the necessary roles for grievance management at the unit level." },
              { title: "a) Dept. Dealing Clerks (DDC):", text: "Creates Department Dealing Clerks (DDC) for handling grievances pertaining to various departments." },
              { title: "b) Welfare Inspector:", text: "Assigns stations/offices/bill-units ('Beat Combination') to each Welfare Inspector in the unit." },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex gap-4 rounded-xl border-l-4 border-indigo-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-indigo-400/70"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-bold">
                  {i + 1}
                </span>
                <div>
                  <span className="text-indigo-400 font-semibold text-sm">{item.title}</span>
                  <p className="text-slate-200 text-sm leading-relaxed mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grievance Process Section */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-indigo-600/90 to-violet-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Grievance Process:</h2>
          </div>
          <div className="p-6 sm:p-8 space-y-6">
            {[
              { num: 4, text: "Employee grievance registration and history: Employee can login and register his grievance through \"Register Grievances\" menu. They can also view the history of all grievances submitted by them and withdraw the grievance using this menu." },
              { num: 5, text: "Grievance reaching Welfare Inspector: After the employee submits his grievance, based on 'Beat Combination', it reaches the concerned Welfare Inspector for processing." },
              { num: 6, text: "Forwarding by Welfare Inspector to GDC: Welfare Inspector reviews the grievance and forwards it to the concerned Grievance Dealing Clerk (GDC) for redressal. At this level, the employee has the option to return the grievance, and grievances can also be returned through GDCs." },
              { num: 7, text: "Grievance processing and closure by GDC: Grievance Dealing Clerk (GDC) processes the grievance and records the closure details. Required closure document can be uploaded and the grievance can be closed or forwarded to the next level." },
              { num: 8, text: "Levels of forwarding: Maximum of 3 levels of forwarding are allowed." },
              { num: 9, text: "Grievance pertaining to other department: If the grievance pertains to another department, GWI (Grievance Welfare Inspector) selects the concerned department and forwards it to the same." },
              { num: 10, text: "Grievance reaching Dept. Dealing Clerk: This grievance reaches the Department Dealing Clerk already created by Grievance Welfare Member." },
              { num: 11, text: "Further forwarding by Dept. Dealing Clerk: Department Dealing Clerk can process the case by forwarding to the next level Dealing Clerks." },
              { num: 12, text: "Grievance pertaining to other unit: If the grievance pertains to another unit, GWI (Grievance Welfare Inspector) selects the concerned unit and forwards it to the same." },
              { num: 13, text: "Grievance reaching Welfare Cell login: This grievance reaches the Welfare Cell login of that particular unit, where any Welfare Cell member can further process it for scrutiny and redressal." },
              { num: 14, text: "Grievances not assigned to Welfare Inspector: Grievances submitted by employees for whom Beat Combination is not assigned are available in the Welfare Cell. In-charge Officer or Welfare Cell member can assign such grievance to the concerned Welfare Inspector or Dealing Clerk of Establishment Section." },
              { num: 15, text: "Grievance Cell members and reports: All Grievance Cell members, Unit Admin, Grievance Dealing Clerks (Unit Admin and Grievance Cell members only those they handle) can view the following reports for the entire unit and Dealing Clerk and Welfare Inspector:", subItems: ["Dashboard Report: It gives total grievances submitted for that unit, total pending, total closed - which can be further drilled down to individual grievance level based on grievance type.", "Grievance Status Report: It gives total grievances, closed in time, not closed in time, pending 15 days, pending 15 to 30 days, pending 30 to 45 days, pending 45 to 60 days, pending more than 60 days."] },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex gap-4 rounded-xl border-l-4 border-indigo-500/50 bg-slate-700/30 px-5 py-4 transition-colors hover:bg-slate-700/50 hover:border-indigo-400/70"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-bold">
                  {item.num}
                </span>
                <div className="flex-1">
                  <p className="text-slate-200 text-sm leading-relaxed">{item.text}</p>
                  {item.subItems && (
                    <ul className="mt-4 space-y-3 list-none">
                      {item.subItems.map((sub, j) => (
                        <li key={j} className="flex gap-3 rounded-lg bg-slate-600/30 px-3 py-3">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold mt-0.5">•</span>
                          <p className="text-slate-300 text-sm leading-relaxed">{sub}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IPAS ID Section */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-indigo-600/90 to-violet-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">IPAS ID:</h2>
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-slate-200 text-sm leading-relaxed">
              IPAS ID is our PF number or Employee number, which is available in the salary slip. It can also be asked from the Accounts Section. Enter your IPAS ID in the box and click on the &quot;Go&quot; button.
            </p>
          </div>
        </section>

        {/* Salary Slip Section */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-indigo-600/90 to-violet-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">To get Salary Slip in HRMS:</h2>
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-slate-200 text-sm leading-relaxed">
              Click on the Pay Slip link and it will take you to the Pay Slip browser window. In the Pay Slip browser window we find the Year and Month dropdown menu, select the desired year and month, and click Submit. After submitting it will show you the Pay Slip row and click on View to take the Pay Slip printout.
            </p>
          </div>
        </section>

        {/* HRMS for Railway Employee - Main Section */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-indigo-600 via-indigo-600 to-violet-600 text-white px-6 py-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent)]" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight relative z-10 text-center">HRMS FOR RAILWAY EMPLOYEE</h2>
          </div>

          {/* HRMS Manuals and Guidelines */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="rounded-xl border-l-4 border-indigo-500/50 bg-slate-700/30 px-5 py-4 hover:bg-slate-700/50 hover:border-indigo-400/70 transition-colors">
              <h3 className="text-indigo-400 font-semibold text-sm mb-2">HRMS Manuals and Guidelines for Indian Railway Employees:</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Basic data entry of around 97% railway employees has been completed in Employee master and E-Service record modules of HRMS which had been launched last year.
              </p>
            </div>

            {/* Why HRMS for Railway Employees? */}
            <div className="rounded-xl border-l-4 border-indigo-500/50 bg-slate-700/30 px-5 py-4 hover:bg-slate-700/50 hover:border-indigo-400/70 transition-colors">
              <h3 className="text-indigo-400 font-semibold text-sm mb-2">Why HRMS for Railway Employees?</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-3">
                Human Resource Management System (HRMS) will allow Railway employees to view their details related to their Increments, Promotions, Awards, Transfers, Postings, Leave, Training, and composition of Family as per records and Nominations for retirement benefits. This information is not readily available to employee at present. It brings transparency to administration.
              </p>
              <p className="text-slate-200 text-sm leading-relaxed">
                HRMS Manuals and Guidelines are very helpful in understanding the use of HRMS portal.
              </p>
            </div>

            {/* Guidelines for updating Executive SR */}
            <div className="rounded-xl border-l-4 border-indigo-500/50 bg-slate-700/30 px-5 py-4 hover:bg-slate-700/50 hover:border-indigo-400/70 transition-colors">
              <h3 className="text-indigo-400 font-semibold text-sm mb-2">Guidelines for updating Executive SR:</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Executive Record sheet is initiative to capture and display data related to service history of officers of Indian Railways. It has information about Basic details of Officers along with their educational qualification, experience, trainings, awards and publication.
              </p>
            </div>

            {/* Guidelines for Settlement Module */}
            <div className="rounded-xl border-l-4 border-indigo-500/50 bg-slate-700/30 px-5 py-4 hover:bg-slate-700/50 hover:border-indigo-400/70 transition-colors">
              <h3 className="text-indigo-400 font-semibold text-sm mb-2">Guidelines for Settlement Module:</h3>
              {[
                "On an average, approximately 30 thousand employees superannuate from different Units of Indian Railways every year. The processes followed to finalise settlement claim of an employee is cumbersome. This web-based Settlement System under HRMS enables the authorities to finalise the settlement of superannuating employee with ease and convenience.",
                "The Settlement System under HRMS displays notification alert to the concerned Service Record Dealing Clerk (SR-DC) to initiate Settlement Process for the employee due to superannuate in next 6 months.",
                "The Settlement System partly pre-populates the Service Record Summary form and presents it before the SR-DC. SR-DC fills in the required information and submits it to the Service Record Verifying Authority (SR-VA) for verification.",
                "SR-VA verifies the service record summary form and forwards it to Service Record Accepting Authority for approval. If found incorrect, SR-VA returns the form with remark to the SR-DC, for necessary correction. SR-VA accepts the Service Record Summary Form if found correct or else returns to the SR-DC for necessary correction. The approved Service Record Summary Form is sent to Settlement Section for necessary action.",
              ].map((text, i) => (
                <p key={i} className="text-slate-200 text-sm leading-relaxed mb-3 last:mb-0">{text}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Salient Features of Office Order Module */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-indigo-600/90 to-violet-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Salient Features of Office Order Module:</h2>
          </div>
          <div className="lg:p-6 p-3">
            <ul className="space-y-4 list-none">
              {[
                "Office order module captures all career events of an employee from Entry in IR to Exit.",
                "It generates all office orders and simultaneously updates all data in HRMS /IPAS with trigger of joining / relieving date entry.",
                "Transparency in terms of instant availability of office order to all stake holders including employee concerned through SMS and reflection on the dashboard of all concerned.",
                "Use of QR code which contains information of Office Order attributes and a link to view the actual office Order. It makes the system tamper proof.",
                "Option to use Voice-to-text feature. Using this a user will be able to enter details in Pre-text and Post-text Option to create Customized templates for use with different kinds of Office Orders.",
                "Auto-fetching of existing details (Name, deptt, designation, pay level etc) of employee involved in the Office Order.",
                "Bilingual format (Office Order are available in English and Hindi)",
                "Security with use of DSC by the Accepting Authority while issuing Office Order. Can be made available to general public, if desired.",
              ].map((text, i) => (
                <li key={i} className="flex gap-4 rounded-lg bg-slate-700/30 px-3 py-4 transition-colors hover:bg-slate-700/50">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold mt-0.5">•</span>
                  <p className="text-slate-200 text-sm leading-relaxed pt-0.5">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Guidelines for APAR Module */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-indigo-600/90 to-violet-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Guidelines for APAR Module:</h2>
          </div>
          <div className="p-6 sm:p-8 space-y-4">
            <p className="text-slate-200 text-sm leading-relaxed">
              APAR module on HRMS portal is applicable for only Non-Gazetted employees of Indian Railways.
            </p>
            <p className="text-slate-200 text-sm leading-relaxed">
              Gazetted officers including Group-&apos;B&apos; officers have to fill their APAR on SPARROW website.
            </p>
          </div>
        </section>

        {/* Salient Features of E-APAR Module */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-indigo-600/90 to-violet-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Salient Features of E-APAR Module:</h2>
          </div>
          <div className="lg:p-6 p-3">
            <ul className="space-y-4 list-none">
              {[
                "It has all the features of SPARROW and has provided facility beyond that for ease of use of all stake holders in terms of writing APAR for non-gaz employees of all departments of IR.",
                "Bilingual format (Office Order are available in English and Hindi) Option to create Customized templates for use with different kinds of rating of an APAR. (e.g. for Very Good, Outstanding etc).",
                "Option to use Voice-to-text feature. Using this, user will be able to enter details against any attribute of APAR.",
                "Predictive text feature for input. User will get a list of possible texts based on part of text typed to make the experience of writing APAR smooth.",
                "Auto mapping of APAR format to employee based on Pay Level, Designation and Department. Auto-fetching of existing details (Name, deptt, designation, pay level etc) as Part-I, Personal Data of APAR Security – Comments and grading by Reporting, Reviewing and Accepting Officer is stored in encrypted format with their respective DSC.",
                "Final APAR in PDF format is digitally signed by the Accepting Authority.",
                "Transparency – Concerned employee will get instant message as soon as APAR is accepted. Employee will be able to view the final Accepted copy in his/her HRMS account.",
                "Multiple MIS can be generated based on available data for monitoring the progress of APAR.",
              ].map((text, i) => (
                <li key={i} className="flex gap-4 rounded-lg bg-slate-700/30 px-3 py-4 transition-colors hover:bg-slate-700/50">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold mt-0.5">•</span>
                  <p className="text-slate-200 text-sm leading-relaxed pt-0.5">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How to Login on HRMS */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-indigo-600/90 to-violet-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">How to Login on HRMS Railway Employee application?</h2>
          </div>
          <div className="p-6 sm:p-8 space-y-3">
            <p className="text-slate-200 text-sm leading-relaxed">
              If you are a first time User on HRMS Railway Employee portal, and don&apos;t know how to login on HRMS?
            </p>
            <p className="text-slate-200 text-sm leading-relaxed">
              Then there is a simple step by step guide to Login on HRMS Railway Employee application.
            </p>
          </div>
        </section>

        {/* How to Reset HRMS password */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-indigo-600/90 to-violet-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">How to Reset HRMS password?</h2>
          </div>
          <div className="p-6 sm:p-8 space-y-3">
            <p className="text-slate-200 text-sm leading-relaxed">
              If you are a Railway Employee and a registered user on HRMS portal of Indian Railways and suppose you have forgotten the password for it, then you no need to worry.
            </p>
            <p className="text-slate-200 text-sm leading-relaxed">
              HRMS Password can be easily reset by following simple steps.
            </p>
          </div>
        </section>

        {/* HRMS Helpdesk */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-700/80 overflow-hidden">
          <div className="bg-linear-to-r from-indigo-600/90 to-violet-600/90 text-white px-6 py-4 border-b border-slate-700/50">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">HRMS Helpdesk:</h2>
          </div>
          <div className="p-6 sm:p-8 space-y-4">
            <p className="text-slate-200 text-sm leading-relaxed">
              In case of any issues please reach out to HRMS helpdesk:
            </p>
            <ul className="space-y-3 list-none">
              {[
                "HRMS application related issue @ 778690452, 9971535534, 7982542883",
                "For OTP @ 7267910583, 9953780947",
                "For ePass related enquiry @ 9891643886, 9069161539, 9971168228",
                "Write to us at irhrms@cris.org.in",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 rounded-lg bg-slate-700/30 px-4 py-3 transition-colors hover:bg-slate-700/50">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold mt-0.5">•</span>
                  <p className="text-slate-200 text-sm leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HumanResourceManagementSystem
