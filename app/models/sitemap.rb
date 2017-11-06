class Sitemap < ActiveRecord::Base
  attr_accessible :name, :title
  belongs_to :user
end
