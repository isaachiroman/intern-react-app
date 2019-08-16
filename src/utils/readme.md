include path API
Call API in here
===================
GET LIST SUGGESTION ON SEARCH
http://192.168.1.247:8384/api/v1/search/suggestion
--input params
keyword

===================
GET LIST ALL RESULT 
http://192.168.1.247:8384/api/v1/search/all
--input params
keyword 
page 

===================
GET LIST POST RESULT 
http://192.168.1.247:8384/api/v1/search/get_post_by_keyword
--input params
keyword 
page

===================
Count by Keyword
http://192.168.1.247:8384/api/v1/search/count_by_keyword?keyword=kinh&type=post
input params
keyword
type ['post','','res_address']

http://192.168.1.247:8384/api/v1/post/get_by_id/?postID=0a5d6491-1a3b-4c32-80e9-223093c2480b