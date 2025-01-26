-- CreateTable
CREATE TABLE `CompanyProfile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comp_name` VARCHAR(191) NOT NULL,
    `small_logo` VARCHAR(191) NOT NULL,
    `main_logo` VARCHAR(191) NOT NULL,
    `gst_no` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL,
    `modified_by` INTEGER NOT NULL,
    `fininacial_year_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
