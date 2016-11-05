class User < ActiveRecord::Base


   include BCrypt

	 def create
     @user = User.new({username: params[:username],
                       email: params[:email]})
     @user.password = params[:password]
     @user.save!
   end

   def password
      @password ||= Password.new(password_hash)
      @password
   end

   def password=(new_password)
      @password = Password.create(new_password)
      self.password_hash = @password
   end

	 def authenticate(passed_password)
     self.password == passed_password
   end

end
