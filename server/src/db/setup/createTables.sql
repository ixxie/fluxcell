DROP TABLE IF EXISTS "space";
DROP SEQUENCE IF EXISTS space_id_seq;
CREATE SEQUENCE space_id_seq
INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."space"
(
    "id" integer DEFAULT nextval('space_id_seq') NOT NULL,
    "name" text NOT NULL,
    "created" timestamp,
    "updated" timestamp
)
WITH (oids = false);

DROP TABLE IF EXISTS "channel";
DROP SEQUENCE IF EXISTS channel_id_seq;
CREATE SEQUENCE channel_id_seq
INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;
CREATE TABLE "public"."channel"
(
    "id" integer DEFAULT nextval('channel_id_seq') NOT NULL,
    "spaceId" integer NOT NULL,
    "title" text NOT NULL,
    "topic" text NOT NULL,
    "created" timestamp,
    "updated" timestamp
)
WITH (oids = false);

DROP TABLE IF EXISTS "message";
DROP SEQUENCE IF EXISTS message_id_seq;
CREATE SEQUENCE message_id_seq
INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."message"
(
    "id" integer DEFAULT nextval('message_id_seq') NOT NULL,
    "channelId" integer NOT NULL,
    "userId" integer NOT NULL,
    "body" text NOT NULL,
    "created" timestamp,
    "updated" timestamp
)
WITH (oids = false);

DROP TABLE IF EXISTS "user";
DROP SEQUENCE IF EXISTS user_id_seq;
CREATE SEQUENCE user_id_seq
INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."user"
(
    "id" integer DEFAULT nextval('user_id_seq') NOT NULL,
    "spaceid" integer NOT NULL,
    "username" text NOT NULL,
    "email" text NOT NULL,
    "created" timestamp,
    "updated" timestamp
)
WITH (oids = false);

DROP TABLE IF EXISTS "user_channel";
DROP SEQUENCE IF EXISTS user_channel_id_seq;
CREATE SEQUENCE user_channel_id_seq
INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."user_channel"
(
    "id" integer DEFAULT nextval('user_channel_id_seq') NOT NULL,
    "userid" integer NOT NULL,
    "channelid" integer NOT NULL,
    "created" timestamp,
    "updated" timestamp
)
WITH (oids = false);
