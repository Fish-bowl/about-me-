class EmployerEmailMailer < ApplicationMailer
  def send_email(user)
    @user = user
    mail(to: @user, subject: 'hiring Max Whitaker')
end
