Product.delete_all
Product.create(:title => 'Programming Ruby 1.9',
    :description => 
        %{ Ruby is the fastest growing and must exciting dynamic
           language out there. If you need to get working programs
           delivered fast you should add Ruby to your toolbox.
         },
    :image_url => '/images/ruby.jpg',
    :price => 49.50
    )
        
