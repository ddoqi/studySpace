lock = "lock"
unlock = "welcome!!"
wrong_password="wrong password!!!"

password ="a1234!"

user_input = input("비밀번호를 입력하세요")

##if 조건 :
##    실행문
##else :
##    실행문

print(lock)
if user_input == password :
    print(unlock)
else :
    print(wrong_password)
