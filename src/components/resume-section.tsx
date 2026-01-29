// src/components/resume-section.tsx
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Download,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Wrench,
} from "lucide-react";
import { resume } from "@/lib/resume";

export default function ResumeSection() {
  return (
    <div className="space-y-8">
      {/* Header with contact info */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{resume.name}</h2>
          <p className="text-muted-foreground">Software Engineer</p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {resume.location}
          </span>
          <a
            href={`mailto:${resume.email}`}
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
            {resume.email}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Phone className="h-4 w-4" />
            {resume.phone}
          </span>
        </div>
      </div>

      {/* Social links + Download */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={resume.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm font-medium shadow-sm hover:bg-muted transition-colors"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href={resume.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm font-medium shadow-sm hover:bg-muted transition-colors"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
        <Link
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border bg-primary text-primary-foreground px-3 py-2 text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors ml-auto"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </Link>
      </div>

      <Separator />

      {/* Experience Section */}
      <section>
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
          <Briefcase className="h-5 w-5" />
          Experience
        </h3>
        <div className="space-y-4">
          {resume.experience.map((exp) => (
            <Card key={exp.company}>
              <CardHeader className="pb-2">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <CardTitle className="text-base">{exp.role}</CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-outside ml-4 space-y-1 text-sm">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
          <GraduationCap className="h-5 w-5" />
          Education
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {resume.education.map((edu) => (
            <Card key={edu.school}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{edu.school}</CardTitle>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </CardHeader>
              <CardContent className="space-y-1">
                <p className="text-sm font-medium">
                  {edu.degree} in {edu.field}
                </p>
                {edu.details && (
                  <p className="text-xs text-muted-foreground">{edu.details}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
          <FolderKanban className="h-5 w-5" />
          Projects
        </h3>
        <div className="space-y-4">
          {resume.projects.map((proj) => (
            <Card key={proj.name}>
              <CardHeader className="pb-2">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <CardTitle className="text-base">{proj.name}</CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {proj.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-outside ml-4 space-y-1 text-sm">
                  {proj.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
          <Wrench className="h-5 w-5" />
          Technical Skills
        </h3>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div>
              <p className="text-sm font-medium mb-2">Languages</p>
              <div className="flex flex-wrap gap-2">
                {resume.skills.languages.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Frameworks & Libraries</p>
              <div className="flex flex-wrap gap-2">
                {resume.skills.frameworks.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Developer Tools</p>
              <div className="flex flex-wrap gap-2">
                {resume.skills.tools.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Other</p>
              <div className="flex flex-wrap gap-2">
                {resume.skills.other.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
