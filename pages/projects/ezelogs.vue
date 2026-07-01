<script setup lang="ts">
import type { TocItem } from "~/components/Project/TableOfContents.vue";

const { activeSections } = useProjectObserver();

const toc: TocItem[] = [
  { id: "overview", label: "Overview" },
  { id: "project-goals", label: "Project Goals" },
  { id: "tech-stack", label: "Tech Stack" },
  {
    id: "features",
    label: "Features",
    children: [
      { id: "feature-dashboard", label: "Dashboard" },
      { id: "feature-project-users", label: "Project Users" },
      { id: "feature-project-chat", label: "Project Chat" },
      { id: "feature-document-control", label: "Document Control" },
      { id: "feature-timesheet", label: "Timesheet" },
      { id: "feature-bid-management", label: "Bid Management" },
    ],
  },
  { id: "challenges", label: "Challenges" },
  { id: "initiatives", label: "Initiatives" },
];
</script>

<template>
  <div class="page">
    <img src="@/assets/images/projects/ezelogs/main.webp" alt="Project Image" class="w-full rounded-xl"/>
    <h2 class="fs-large text-white font-bold mt-3">Ezelogs</h2>
    <p class="text-white/80">
      Ezelogs is a construction management platform that brings project scheduling, field logs, documents, timesheets,
      and bidding together in one place — keeping construction teams efficient from preconstruction through closeout.
    </p>
    <ProjectLiveLink href="https://ezelogs.com/"/>
    <hr class="w-full border border-white/30 my-5"/>
  </div>

  <div class="page grid grid-cols-6 place-content-center md:grid-cols-10 gap-6">
    <div class="col-span-7 space-y-4">
      <section class="project-section" id="overview">
        <h3 class="project-heading heading-bl">Overview</h3>
        <p class="text-white/90">
          Ezelogs is a comprehensive construction management platform built to improve efficiency across every phase of
          a project. It combines time, daily, safety, and performance logs with project dashboards, role-based user
          management, document control, in-app chat, timesheets with labour-cost tracking, and bid management — giving
          teams a single place to monitor costs, workforce output, and progress. Available on web, Android, and iOS, it
          keeps the field and the office in sync with real-time data from any location, alongside resource planning and
          safety-and-compliance reporting.
        </p>
        <img src="@/assets/images/projects/ezelogs/home.webp" alt="project screenshot" class="w-full rounded-xl px-5"/>
      </section>
      <section class="project-section" id="project-goals">
        <h3 class="project-heading heading-bl">Project Goals</h3>
        <p class="text-white/90">
          The primary goal was to enhance efficiency and productivity across all phases of construction projects. Key
          objectives include offering advanced tools for effective communication, resource planning, safety compliance,
          and performance monitoring.
        </p>
      </section>
      <section class="project-section" id="tech-stack">
        <h3 class="project-heading heading-bl">Tech Stack</h3>
        <p class="text-white/90">To achieve this, the following technologies were used:</p>
        <ul class="tech-stack">
          <li><span class="font-bold">Vue.js:</span>Developed a dynamic and interactive user interface.</li>
          <li><span class="font-bold">Bootstrap:</span>Applied style for responsive design.</li>
          <li><span class="font-bold">Mysql:</span>Utilized a reliable relational database system.</li>
          <li><span class="font-bold">Laravel:</span>Implemented a robust backend framework.</li>
          <li><span class="font-bold">AWS EC2:</span>Deployed scalable virtual servers.</li>
          <li><span class="font-bold">AWS S3:</span>Provided secure object storage.</li>
        </ul>
      </section>
      <section class="project-section" id="features">
        <h3 class="project-heading heading-bl">Features</h3>

        <section class="project-section" id="feature-dashboard">
          <h4 class="font-bold text-white">Dashboard</h4>
          <img src="@/assets/images/projects/ezelogs/dashboard.webp"
               alt="User dashboard showing project cards with dates and status badges"
               class="w-full rounded-xl px-5"/>
          <p class="text-white/90">The user dashboard is the entry point, presenting every project as a card with its
            start and end dates and a live status badge — Started, In Progress, or Completed. Users pick the project they
            want to work on and drop straight into its workspace, keeping multiple concurrent jobs organised at a
            glance.</p>
        </section>
        <section class="project-section" id="feature-project-users">
          <h4 class="font-bold text-white">Project Users</h4>
          <img src="@/assets/images/projects/ezelogs/project_users.webp"
               alt="Project users management table with roles, trades, and invite status"
               class="w-full rounded-xl px-5"/>
          <p class="text-white/90">Each project has its own role-based user management. Team members — subcontractors,
            project managers, agencies, and customers — are invited or assigned to a project along with their company,
            contact details, role, and trade. Statuses such as Invited and Assigned track where each person is in the
            onboarding flow, and global users can be created once and reused across projects.</p>
        </section>
        <section class="project-section" id="feature-project-chat">
          <h4 class="font-bold text-white">Project Chat</h4>
          <img src="@/assets/images/projects/ezelogs/project_chat.webp"
               alt="In-app project chat with a contacts list, group creation, and file attachments"
               class="w-full rounded-xl px-5"/>
          <p class="text-white/90">Built-in messaging keeps project communication in one place. Members can chat
            one-to-one with people invited to the project, create group conversations, search contacts, and share files
            and attachments — removing the need to jump out to email or a separate messenger.</p>
        </section>
        <section class="project-section" id="feature-document-control">
          <h4 class="font-bold text-white">Document Control</h4>
          <img src="@/assets/images/projects/ezelogs/document_control.webp"
               alt="Contract document manager with folders, file sizes, and modified dates"
               class="w-full rounded-xl px-5"/>
          <p class="text-white/90">A document management module organises all project files into folders — admin,
            preconstruction, contract management, and more. Users can import documents, create folders, track file size
            and last-modified dates, and star important items, giving every project a single source of truth for its
            paperwork.</p>
        </section>
        <section class="project-section" id="feature-timesheet">
          <h4 class="font-bold text-white">Timesheet</h4>
          <img src="@/assets/images/projects/ezelogs/time_sheet_report.webp"
               alt="Timesheet report with date, trade, and employee filters plus PDF export"
               class="w-full rounded-xl px-5"/>
          <img src="@/assets/images/projects/ezelogs/time_sheet_list.webp"
               alt="Timesheet list with regular, overtime, and double-time hours and labor cost"
               class="w-full rounded-xl px-5"/>
          <p class="text-white/90">The timesheet module records labour hours down to regular, overtime, and double-time,
            automatically calculating labour cost and cumulative project hours per worker and trade. Entries can be
            filtered by date range, trade, subcontractor, or employee, then compiled into a branded report that's
            exportable to PDF or shareable by email.</p>
        </section>
        <section class="project-section" id="feature-bid-management">
          <h4 class="font-bold text-white">Bid Management</h4>
          <img src="@/assets/images/projects/ezelogs/bid_management.webp"
               alt="Bid management dashboard with cost estimate breakdowns, charts, bid packages, and RFIs"
               class="w-full rounded-xl px-5"/>
          <p class="text-white/90">The bid management dashboard turns cost estimation into a visual, structured process.
            It breaks a bid down by category — labour, material, equipment, subcontractor, and markups — and by trade,
            illustrating the split with charts, while tracking bid packages, received proposals, and RFIs alongside a
            risk-management overview.</p>
        </section>
      </section>
      <section class="project-section" id="challenges">
        <h3 class="project-heading heading-bl">Challenges</h3>
        <p class="text-white/90">
          One of the primary challenges was the resistance to change commonly observed among construction professionals
          accustomed to traditional project management methods. Overcoming it meant investing in comprehensive training
          and demonstrating the software's tangible benefits to encourage adoption.
        </p>
      </section>
      <section class="project-section" id="initiatives">
        <h3 class="project-heading heading-bl">Initiatives</h3>
        <p class="text-white/90">
          To address the challenges inherent in implementing Ezelogs Construction Software, several strategic
          initiatives have been undertaken. A key focus is on delivering comprehensive training programs to facilitate
          user adoption and proficiency, thereby minimizing resistance to change.
        </p>
        <img src="@/assets/images/projects/ezelogs/footer.webp" alt="project screenshot" class="w-full rounded-xl px-5"/>
      </section>
    </div>

    <div class="col-span-3 mt-5">
      <div class="sticky top-[120px] flex flex-col gap-2">
        <h4 class="text-white font-bold mb-2">Table of Contents</h4>
        <LazyProjectTableOfContents :items="toc" :active-sections="activeSections"/>
      </div>
    </div>
  </div>
</template>