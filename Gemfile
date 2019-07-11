source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '5.2.0'
gem 'pg', '>= 0.18', '< 2.0'
gem 'turbolinks' #required for redirects even if using via webpack

gem 'sass'


gem 'rocket_cms_activerecord'

gem 'rails_admin', github: 'sferik/rails_admin'
gem 'friendly_id', github: 'norman/friendly_id'

gem 'slim'
gem 'haml'

gem 'sass-rails'
gem 'rs-webpack-rails', '~> 0.11.1'

gem 'devise'
gem 'devise-i18n'
gem 'cancancan'


gem 'cloner'
gem 'puma'

gem 'sentry-raven'

gem 'uglifier'

gem 'rs_russian'
#gem 'enumerize'
#gem 'active_model_serializers'

# windows
gem 'tzinfo-data' if Gem.win_platform?
gem 'wdm', '>= 0.1.0' if Gem.win_platform?

gem 'bootsnap', require: false

group :development do
  #gem 'binding_of_caller'
  #gem 'better_errors', github: 'charliesome/better_errors'
  #gem 'pry-rails'
  gem 'listen'
  gem 'annotate'


  gem 'capistrano', require: false
  gem 'capistrano-bundler', require: false
  gem 'capistrano3-puma', require: false
  gem 'capistrano-rails', require: false
end

group :test do
  gem 'rspec-rails'
  gem 'database_cleaner'
  gem 'email_spec'

  gem 'ffaker'
  gem 'factory_bot_rails'
end

