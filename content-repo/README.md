## Visibility of Course Content
The [learning management system](https://learn.temporal.io/) 
(LMS) is our primary means of delivering self-paced training courses.
Although the individual components of the training may be 
hosted in other systems, such as GitHub and YouTube, it's 
important to provide a single place for learners to find,
register for, and participate in these courses. Not only 
does it ensure they'll be following the right material in
the right order, it allows us to evaluate progress, identify 
trends, communicate with our audience, and provide a safe 
and productive experience. 

Therefore, it is currently our convention that course content
repositories will be owned by the Temporal organization in 
GitHub, but will have private visibility and shared only as
necessary (course code repositories, on the other hand, must
have public visibility in order for GitPod to provision the
exercise environment). Similarly, all videos used in our
courses will be hosted in YouTube, as part of the Temporal
channel, and will be unlisted.


## Naming Convention for Course Content Repositories

Because the course content is distributed independently of the code, we use 
two repositories for each course. The course content repository will contain the lessons, diagrams, narration transcripts, instructor guide material, and 
other files used to teach the course.

Since we will have multiple courses, each of which will likely have multiple 
versions that each cover a specific SDK, following a naming convention will
make it easier to locate (or identify) the repository for a given course.
I propose the following convention: `edu-<COURSENUM>-<LANGUAGE>-content`,
where `<COURSENUM>` is the three-digit course number that designates the
sequence of the course within the learning path and `<LANGUAGE>` denotes
the programming language used in the course. The `edu` prefix allows us
to find all course repositories easily, while the `content` suffix ensures
that the content and code repositories for a given course always appear
next to one another in a sorted list.

The following table provides examples of this pattern:

| Repository Name Examples      | Description of contents
|-------------------------------|-----------------------------------------------------------------------
| `edu-101-go-content`          | Temporal 101 for Go course content
| `edu-101-java-content`        | Temporal 101 for Java course content
| `edu-102-typescript-content`  | Temporal 102 for Typescript course content
| `edu-201-python-content`      | Temporal 201 for Python course content

To be clear, the third element (`go`, `java`, etc.) in this pattern distinguishes 
between variations of the __same__ course, although there will necessarily be 
some differences in the content because not all SDKs support all capabilities.

Although the course number suggests the sequence within the learner's journey, 
it does not follow that all learners will want or need to take every course we
offer. Our initial courses target developers, but we may offer courses for 
for additional audiences (such as system administrators or architects) in the 
future. When that happens, we will publish recommendations for the courses that
one should take based on role and skill level. 

If we offer translations and/or localizations of a course, we plan to keep
them in the same repository as the original (US English) version, but use
dirctories to separate the content. For example, content for the Japanese 
translation would be in a subdirectory ending in `_jp`, while content 
localized for Brazilian Portuguese would be in a directory ending in `_pt-br`.


## Typical Layout of Course Content Repositories

```
  +-- about-this-course/           # Holds content related to the intro chapter (which covers objectives, introductions, and logistics)
  |   |
  |   +-- README.md                # Markdown file that provides a bulleted list of links to all content in this chapter
  |   |
  |   +-- <section-slug>.md        # Markdown file containing content for a specific section of this chapter (linked to from this directory's README.md); 
  |   |                            # <section-slug> is a short descriptive name, such as 'course-format' or 'exercise-environment'
  |   | 
  |   +-- assets/                  # Contains files used to produce content for this chapter (e.g., a Keynote file or PSD version of a JPG file exported to images directory)
  |   |   |
  |   |   +-- questions.md         # Markdown file containing questions and answers for quizzes that appear in this chapter
  |   |   |
  |   |   +-- instructor-guide/    # Contains instructor guide content this chapter
  |   |   |   |
  |   |   |   +-- README.md        # Markdown file containing instructor guide content for this chapter (if there are other pages, this will link to them)
  |   |   |
  |   |   +-- video-production/    # Contains files related to any videos that are part of this chapter
  |   |       |
  |   |       +-- <video-slug>.md  # Markdown file containing the description, production notes, and transcript for a video in this chapter.
  |   |                            # <video-slug> is a short descriptive name for the video, such as 'worker-config' or 'retry-policy'.
  |   |                            # The course developer will include the transcript for each video, on the same page in which it's
  |   |                            # embedded into the LMS, below a "Video Transcript" heading at the end of that page,
  |   |
  |   |
  |   +-- images/                  # Contains all images that are specific to the intro chapter
  |
  |
  +-- <chapter-slug>/              # Holds chapter content (<chapter-slug> is a short descriptive name, such as 'what-is-temporal')
  |                                # Structure below this and other chapter directories is identical to that described above
  |
  +-- conclusion/                  # Holds content for conclusion chapter (provides recap, reference material, and next steps)
  |
  +-- common/                      # Holds files referenced in or used by multiple chapters
  |   |
  |   +-- assets/                  # Contains files that are used to produce the course content
  |   |       |
  |   |       +-- final-exam.md    # Markdown file containing questions and answers for the end-of-course exam / assessment, if this course offers one
  |   |
  |   +-- images/                  # Contains images that are referenced in multiple chapters
  |
  +-- .gitignore                   # List of file names and patterns to ignore for revision control
  |
  +-- LICENSE                      # MIT license that attributes work to Temporal
  |
  +-- README.md                    # Top-level index page for the course, containing a link to the code repo and bulleted list of links to each chapter
```




