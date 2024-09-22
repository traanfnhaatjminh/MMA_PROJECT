Create Database Mma_Project

create table Category(
cid int primary key,
cname nvarchar(30)
)

insert into Category(cid, cname)
values 
(1, 'T-SHIRT'),
(2, 'JEANS'),
(3, 'SHORT'),
(4, 'PANTS')

create table product
(
[id] int identity(1,1) primary key,
[name] nvarchar(60) UNIQUE NULL,
[original_price] money NULL,
[sale_price] money NULL,
quantity int,
[describe] nvarchar(1000) NULL,
[image] nvarchar(100) NULL,
cid int
FOREIGN KEY (cid) REFERENCES Category(cid)
)

insert into product([name],[original_price],[sale_price],quantity,describe,[image],cid)
values 
 ('$MAKER THINGS TEE IN WHITE',600000.000,500000.00,20,N'Unisex,Oversize,100% Cotton,In nổi,Model wears size L','https://smakerclothing.com/upload/sanpham/dscf9477-1710.jpg',1),
 ('I GOT HOMIES IN SAUDI TEE IN BLACK',500000.000,400000.00,14,N'Unisex,Oversize,100% Cotton,In nổi,Model wears size L','https://smakerclothing.com/upload/sanpham/dscf9495-2979.jpg',1),
 ('I GOT MONEY IN SAUDI TEE IN WHITE',500000.000,400000.00,11,N'Unisex,Oversize,100% Cotton,In nổi,Model wears size L','https://smakerclothing.com/upload/sanpham/dscf9491-3408.jpg',1),
 ('YACHT CLUB TANK TOP IN DARK PURPLE',600000.000,500000.00,10,N'Unisex,Oversize,100% Cotton,Model wears size L','https://smakerclothing.com/upload/sanpham/dscf9521-6368.jpg',1),
 ('YACHT CLUB TEE IN BROWN',600000.000,500000.00,12,N'Unisex,Oversize,100% Cotton,Model wears size L','https://smakerclothing.com/upload/sanpham/dscf9514-4152.jpg',1),
 ('MONEY ON MY MIND TEE IN BLACK',550000.000,450000.00,13,N'Unisex,Oversize,100% Cotton,Model wears size L','https://smakerclothing.com/upload/sanpham/dscf9444-8531.jpg',1),
 ('EMBOSSED LOGOS STRAIGHT JEANS',950000.000,850000.00,17,N'Unisex,Straigh form,Denim,Model wears size 32','https://smakerclothing.com/upload/sanpham/dsc02893-4369.jpg',2),
 ('BORN BROKE DIE RICH MESH SHORT IN CREAM',650000.000,550000.00,15,N'Unisex,100% Mesh,Model wears size L','https://smakerclothing.com/upload/sanpham/dscf9407-4077.jpg',3),
 ('STRIPES KHAKI PANTS IN BROWN',800000.000,700000.00,18,N'Unisex,Straight Fit,100% Cotton,Model wears size L','https://smakerclothing.com/upload/sanpham/dscf8299-9001.jpg',4),
 ('$MAKER STRAIGHT JEANS IN BLUE',800000.000,700000.000,12,N'Unisex,Straigh form,Denim,Model wears size 32','https://smakerclothing.com/upload/sanpham/dscf8683-0961.jpg',2),
 ('LOGO STRAIGHT JEANS IN LIGHT BLUE',850000.000,750000.000,14,N'Unisex,Straigh form,Denim,Model wears size 32','https://smakerclothing.com/upload/sanpham/dscf7049-7331.jpg',2),
 ('$MAKER SHORT ON FIRE IN BLACK',700000.000,600000.000,19,N'Unisex,Draper & Cotton,Model wears size L','https://smakerclothing.com/upload/sanpham/dsc00766-4281.jpg',3),
 ('$MAKER CORDUROY SHORT IN TAN',650000.000,550000.000,13,N'Unisex,100% Mesh,Model wears size L','https://smakerclothing.com/upload/sanpham/dsc00754-4189.jpg',3),
 ('$MAKER X SWE CARGO FLARE PANTS IN BROWN',750000.000,650000.000,11,'NUnisex,Straigh form,100% jean,Model wears size L','https://smakerclothing.com/upload/sanpham/1-(5)-1007.jpg',4),
 ('CUSTOMIZE FLARE SWEAT PANTS IN BLACK',1150000.000,1050000.000,20,N'Hand made custom (vẽ sơn bằng tay),Unisex,100% Cotton ( Nỉ ),Model wears size L','https://smakerclothing.com/upload/sanpham/img_6182-0014.jpg',4)

insert into product([name],original_price,[sale_price],quantity,describe,[image],cid)
values 
 ('NONE OF THIS MATTERS ANYMORE TEE IN CREAM',550000.000,450000.00,17,N'Unisex,Oversize,100% Cotton,Model wears size L','https://smakerclothing.com/upload/sanpham/dsc00138-9101.jpg',1),
  ('CHAMPION TEE IN WHITE',550000.000,450000.00,17,N'Unisex,Oversize,100% Cotton,Model wears size L','https://smakerclothing.com/upload/sanpham/dsc00133-0775.jpg',1),
 ('420 PICNIC TEE IN BLACK',600000.000,500000.00,15,N'Unisex,Oversize,100% Cotton,Model wears size L','https://smakerclothing.com/upload/sanpham/dsc00747-2973.jpg',1),
 ('MONEY IS A BAD MASTER TEE IN BLACK',550000.000,450000.00,12,N'Unisex,Oversize,100% Cotton,Model wears size L','https://smakerclothing.com/upload/sanpham/dsc09817-1991.jpg',1),
 ('THE LOGOS TEE IN BLACK',600000.000,500000.00,16,N'Unisex,Oversize,100% Cotton,Model wears size L','https://smakerclothing.com/upload/sanpham/dsc09747-4373.jpg',1),
  ('TENVOVEN MERCH MONEY ISLAND SHORTS IN CREAM',650000.000,550000.00,17,N'Unisex,100% Mesh,Model wears size L','https://smakerclothing.com/upload/sanpham/dsc02295-8157.jpg',3),
  ('TETVOVEN MERCH MONEY ISLAND TEE IN CREAM',650000.000,550000.00,17,N'Unisex,Oversize,100% Cotton,Model wears size L','https://smakerclothing.com/upload/sanpham/dsc02310-9140.jpg',1)

create table [Users](
[userID] int identity(1,1) primary key,
[userName] nvarchar(60) UNIQUE,
gender nvarchar(20) ,
email nvarchar(60),
mobile nvarchar(20),
avatar nvarchar(1255),
[address] nvarchar(45),
pass nvarchar(20),
roleID int,
userStatus int,
FOREIGN KEY (roleID) REFERENCES Roles(roleID)
)

insert into Users(userName, gender, email, mobile, avatar, [address], pass, roleID)
values 
('quangtoan','male', 'saler1@gmail.com','0939152003','https://img.nimo.tv/t/1629526287189/202403131710297308141_1629526287189_avatar.png/w240_l0/img.webp?fbclid=IwAR3V7OOezTPkRufvUleMwrD8JtWuIaskpQO3m3RZImBtUY3sLkw2DpAFSkc','ha noi','123',1),
('nguyentahoang','male', 'admin@gmail.com','0969112003','null','ha noi','123',2),
('tahoang','male', 'saler2@gmail.com','0969112003','null','ha noi','123',1),
('nhatminh','male', 'marketer@gmail.com','0969102003','null','tu son','123',3),
('duongduy','male', 'salemanager@gmail.com','0969112003','null','ha noi','123',4),
('vietduy','male', 'staff@gmail.com','0902283551','null','Son Tay','123',5),
('minhnhat','male', 'saler3@gmail.com','0969112003','null','ha noi','123',1)

create table Roles (
roleID int primary key,
roleName nvarchar(20)
)

insert into Roles (roleID, roleName)
values 
(1, 'Saler'),
(2, 'Admin'),
(3, 'Customer'),
(4, 'Sale Manager'),
(5, 'Warehouse Staff')

create table Feedback (
feedbackID int IDENTITY(1,1) primary key not null,
customerID int,
content nvarchar(1000),
productID int,
postDate nvarchar(20),
rate_star float,
[status] nvarchar(20),
FOREIGN KEY (customerID) REFERENCES Users(userID),
FOREIGN KEY (productID) REFERENCES [product](id)
)


create table [Order](
orderID int IDENTITY(1,1) primary key NOT NULL,
customerID int,
orderName nvarchar(60),
orderDiscount int,
orderDate Date,
notes nvarchar(1000),
orderAddress nvarchar(100),
orderPhone nvarchar(20),
orderStatus nvarchar(50),
totalCost float,
sellerID int,
changeSeller nvarchar(20)
FOREIGN KEY (customerID) REFERENCES Users(userID)
)

create table orderDetail(
detailID int IDENTITY(1,1) NOT NULL,
orderID int NOT NULL,
productID int,
productPrice money,
quantity int,
totalCost money,
isFeedback varchar(20),
FOREIGN KEY (orderID) REFERENCES [Order](orderID),
FOREIGN KEY (productID) REFERENCES product(id),
)
