        -- ##################### user table ##################################
CREATE TABLE `users` (id int(11) AUTO_INCREMENT NOT NULL,`name` varchar(500) NOT NULL,`email` varchar(500) NOT NULL,PRIMARY KEY(id));

ALTER TABLE `users` ADD (`address` varchar(1500) NOT NULL, `contact` varchar(10) NOT NULL, `city` varchar(100) NOT NULL);

-- ########################## register table ############################################

CREATE TABLE `register` (id int(11) AUTO_INCREMENT NOT NULL,`name` varchar(500) NOT NULL,`email` varchar(500) NOT NULL,`password` varchar(500) NOT NULL,PRIMARY KEY(id));


-- ######################################### product table ########################################


CREATE TABLE `blog` (id int(11) AUTO_INCREMENT NOT NULL,`title` varchar(500) NOT NULL,`image` longtext NOT NULL,`description` varchar(500) NOT NULL,`user_id` int(11),PRIMARY KEY(id),FOREIGN KEY (`user_id`) REFERENCES `users`(id));