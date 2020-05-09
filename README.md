# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## membersテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false,foreign_key: true|
|group_id|integer|null: false,foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|Column|Type|Option|
|------|----|------|
|name|string|index:true, null: false, unique: true|
|mail|string|null: false|

### Association
- has_many :groups, through: members
- has_many :messages
- has_many :members

## messageテーブル
|Column|Type|Option|
|------|----|------|
|text|text|null: false|

### Association
- belongs_to :groups, through: members
- belongs_to :users

## Groupテーブル
|Column|Type|Option|
|------|----|------|
|name|string|index:true, null: false, unique: true|
|user_id|integer|null: false,foreign_key: true|


### Association
- belongs_to :users, through: members
- has_many :messages
- has_many :members