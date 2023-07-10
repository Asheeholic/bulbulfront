const backupRoute = [
    {
        path: "/backup",
        name: "backup",
        component: () => import('@/components/backup/BackupComponent.vue'),
    },
    {
        path: "/backup-status",
        name: "backupStatus",
        component: () => import('@/components/backup/BackupStatusComponent.vue'),
    },
]

export default backupRoute;