get '/' do
  erb :index, layout: !request.xhr?
end

get '/data' do
  if request.xhr?
    erb :'/user_events/_request_partial', layout: false
  else
    erb :'user_events/index'
  end
end
