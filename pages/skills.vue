<script setup>
</script>

<template>
  <div>
    <SectionTitle>Skills</SectionTitle>

    <SkillCategoryHeading>
      Frontend
    </SkillCategoryHeading>
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      <SkillCard skill-icon="html5">
        HTML
      </SkillCard>
      <SkillCard skill-icon="css3">
        CSS
      </SkillCard>
      <SkillCard skill-icon="sass">
        SCSS
      </SkillCard>
      <SkillCard skill-icon="javascript">
        JavaScript
      </SkillCard>
      <SkillCard skill-icon="typescript">
        TypeScript
      </SkillCard>
      <SkillCard skill-icon="vuedotjs">
        Vue 2 & 3
      </SkillCard>
      <SkillCard skill-icon="nuxtdotjs">
        Nuxt 3
      </SkillCard>
      <SkillCard skill-icon="jquery">
        jQuery
      </SkillCard>
      <SkillCard skill-icon="bootstrap">
        Bootstrap
      </SkillCard>
      <SkillCard skill-icon="tailwindcss">
        Tailwind CSS
      </SkillCard>
    </div>

    <SkillCategoryHeading>
      Backend
    </SkillCategoryHeading>
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      <SkillCard skill-icon="nodedotjs">
        Node.js
      </SkillCard>
      <SkillCard skill-icon="express">
        Express
      </SkillCard>
      <SkillCard skill-icon="php">
        PHP
      </SkillCard>
      <SkillCard skill-icon="codeigniter">
        CodeIgniter
      </SkillCard>
      <SkillCard skill-icon="language-java" icon-collection="mdi">
        Java
      </SkillCard>
      <SkillCard skill-icon="mocha">
        Mocha
      </SkillCard>
      <SkillCard skill-icon="chai">
        Chai
      </SkillCard>
    </div>

    <SkillCategoryHeading>
      Databases
    </SkillCategoryHeading>
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      <SkillCard skill-icon="mysql">
        MySQL
      </SkillCard>
    </div>

    <SkillCategoryHeading>
      Additional Technologies
    </SkillCategoryHeading>
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      <SkillCard skill-icon="office-365" icon-collection="hugeicons">
        Office.js
      </SkillCard>
      <SkillCard skill-icon="java" icon-collection="hugeicons">
        JavaFX
      </SkillCard>
    </div>

    <SkillCategoryHeading>
      IDEs and Tools
    </SkillCategoryHeading>
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      <SkillCard skill-icon="jetbrains">
        JetBrains IDEs
      </SkillCard>
      <SkillCard skill-icon="eclipseide">
        Eclipse
      </SkillCard>
      <SkillCard skill-icon="git">
        Git
      </SkillCard>
      <SkillCard skill-icon="github">
        GitHub
      </SkillCard>
      <SkillCard skill-icon="amazonaws">
        AWS EC2 & S3
      </SkillCard>
      <SkillCard skill-icon="postman">
        Postman
      </SkillCard>
      <SkillCard skill-icon="datadog">
        Datadog
      </SkillCard>
    </div>
  </div>
</template>
