import boxIcon from "@iconify/icons-lucide/box";
import codeIcon from "@iconify/icons-lucide/code";
import filePlus2Icon from "@iconify/icons-lucide/file-plus-2";
import folderTreeIcon from "@iconify/icons-lucide/folder-tree";
import galleryThumbnailIcon from "@iconify/icons-lucide/gallery-thumbnails";
import historyIcon from "@iconify/icons-lucide/history";
import mergeIcon from "@iconify/icons-lucide/merge";
import milestoneIcon from "@iconify/icons-lucide/milestone";
import packageIcon from "@iconify/icons-lucide/package";
import paletteIcon from "@iconify/icons-lucide/palette";
import stickyNoteIcon from "@iconify/icons-lucide/sticky-note";
import typeIcon from "@iconify/icons-lucide/type";
import unplugIcon from "@iconify/icons-lucide/unplug";

import { IMenuItem } from "@/types/layout/admin";

export const docRoutes = {
    introduction: "/docs/introduction",
    quickStart: "/docs/quick-start",
    customization: {
        theme: "/docs/customization/theme",
        logo: "/docs/customization/logo",
        typography: "/docs/customization/typography",
    },
    knowledge: {
        dependencies: "/docs/knowledge/dependencies",
        folderStructure: "/docs/knowledge/folder-structure",
        createPage: "/docs/knowledge/create-page",
        package: "/docs/knowledge/package",
        pages: "/docs/knowledge/pages",
        integrate: "/docs/knowledge/integrate",
    },
    support: {
        update: "/docs/support/update",
        roadmap: "/docs/support/roadmap",
        changelog: "/docs/support/changelog",
    },
};

export const docMenuItems: IMenuItem[] = [
    { key: "documentation", label: "Documentation", isTitle: true },
    {
        key: "documentation-introduction",
        label: "Introduction",
        url: docRoutes.introduction,
        icon: galleryThumbnailIcon,
    },
    {
        key: "documentation-quick-start",
        label: "Quick Start",
        url: docRoutes.quickStart,
        icon: codeIcon,
    },
    { key: "customization", label: "Customization", isTitle: true },
    {
        key: "customization-theme",
        label: "Theme",
        url: docRoutes.customization.theme,
        icon: paletteIcon,
    },
    {
        key: "customization-logo",
        label: "Logo",
        url: docRoutes.customization.logo,
        icon: boxIcon,
    },
    {
        key: "customization-typography",
        label: "Typography",
        url: docRoutes.customization.typography,
        icon: typeIcon,
    },
    { key: "knowledge", label: "Knowledge", isTitle: true },
    {
        key: "documentation-package",
        label: "Package",
        url: docRoutes.knowledge.package,
        icon: packageIcon,
    },
    {
        key: "documentation-pages",
        label: "Pages",
        url: docRoutes.knowledge.pages,
        icon: stickyNoteIcon,
    },
    {
        key: "knowledge-dependencies",
        label: "Dependencies",
        url: docRoutes.knowledge.dependencies,
        icon: mergeIcon,
    },
    {
        key: "knowledge-folder-structure",
        label: "File Structure",
        url: docRoutes.knowledge.folderStructure,
        icon: folderTreeIcon,
    },
    {
        key: "knowledge-create-page",
        label: "Create Page",
        url: docRoutes.knowledge.createPage,
        icon: filePlus2Icon,
    },
    {
        key: "knowledge-integrate",
        label: "Integrate",
        url: docRoutes.knowledge.integrate,
        icon: unplugIcon,
    },
    { key: "support", label: "Support", isTitle: true },
    {
        key: "support-roadmap",
        label: "Roadmap",
        url: docRoutes.support.roadmap,
        icon: milestoneIcon,
    },
    {
        key: "support-changelog",
        label: "Changelog",
        url: docRoutes.support.changelog,
        icon: historyIcon,
    },
];
