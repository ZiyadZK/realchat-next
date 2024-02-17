-- CreateTable
CREATE TABLE `User` (
    `username` VARCHAR(191) NOT NULL,
    `fullname` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chat` (
    `num` INTEGER NOT NULL AUTO_INCREMENT,
    `sender_username` VARCHAR(191) NOT NULL,
    `sender_fullname` VARCHAR(191) NOT NULL,
    `receiver_username` VARCHAR(191) NOT NULL,
    `receiver_fullname` VARCHAR(191) NOT NULL,
    `sentDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `readDate` DATETIME(3) NOT NULL,
    `message` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`num`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
