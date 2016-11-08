# GET Route | DISPLAY a list of ALL AR Objects
get '/events' do
  # your code here ...
  erb :"/events/index"
end

get '/data_viz' do
  erb :"/partials/_data_viz"
end

# GET Route | RETURN an HTML/erb FORM for CREATING a new AR Object
get '/events/new' do
  # your code here
  # erb :'/events/new'
end

# POST Route | CREATE a new AR Object (using params returned from form)
post '/events' do
  # your code here
end

# GET Route | DISPLAY a SINGLE AR Object
get '/events/:id' do
  # your code here
  # erb :'/events/show'
end

# GET Route | RETURN an HTML/erb FORM for EDITING an AR Object
get '/events/:id/edit' do
  # your code here
  # erb :'/events/edit'
end

# PUT Route | UPDATE a specific AR Object (using params returned from form)
put '/events/:id' do
  # your code here
end

# DELETE Route | DELETE a specific AR Object
delete '/events/:id' do
  # your code here
end
