class SitemapsController < ApplicationController
  before_filter :set_sitemap, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @sitemaps = Sitemap.all
    respond_with(@sitemaps)
  end

  def show
    respond_with(@sitemap)
  end

  def new
    @sitemap = Sitemap.new
    respond_with(@sitemap)
  end

  def edit
  end

  def create
    @sitemap = Sitemap.new(params[:sitemap])
    @sitemap.save
    respond_with(@sitemap)
  end

  def update
    @sitemap.update_attributes(params[:sitemap])
    respond_with(@sitemap)
  end

  def destroy
    @sitemap.destroy
    respond_with(@sitemap)
  end

  private
    def set_sitemap
      @sitemap = Sitemap.find(params[:id])
    end
end
