# frozen_string_literal: true

class HomeReflex < ApplicationReflex
  def make_live
    Turbo::StreamsChannel.broadcast_update_to "live", target: "receiving_live", partial: 'home/content', locals: {content: element.value}
    morph :nothing
  end
end
